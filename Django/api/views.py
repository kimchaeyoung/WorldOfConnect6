from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser
from rest_framework import generics

from .models import *
from .serializers import *

from django.http import Http404, HttpResponseRedirect, JsonResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import permissions

import random, requests, time, string
from django.conf import settings
from string import ascii_uppercase
from django.urls import reverse
from rest_framework.viewsets import ModelViewSet

from rest_framework_extensions.mixins import NestedViewSetMixin

from django.contrib.auth.models import User

import sys, os
sys.path.append(os.path.abspath("../player_example/"))
import monkey

from .forms import *


def home(request):
        return render(request, 'home.html')


def makeRandomString():
    randomStream=""
    for i in range(0,8):
        randomStream += str(random.choice(string.ascii_letters+string.digits))
    return randomStream


def single(request):
    if request.method == 'POST':
        form = single_form(request.POST)

        if form.is_valid():
            player = form.cleaned_data['player_name']
            colorNum = random.randrange(1,3)

            if colorNum == 1:
                color = "white"
            else :
                color = "black"

        session_key = request.COOKIES.get(settings.SESSION_COOKIE_NAME)

        if session_key is None:
            request.session.set_test_cookie()
            return render(request, 'single_form.html', {'alert':"No Session ID, refresh page!"})

        elif Session.objects.filter(session_name=session_key).exists():
            s = Session.objects.get(session_name=session_key)

        else:
            nid = makeRandomString()
            s = Session(newid=nid, session_name = str(session_key), status=True)
            s.save()

            p = Player(player_session=s, player1_name=player, player2_name=None,  player1_color=color, player2_color=None)
            p.save()
            
            user = User(username=str(player), is_staff=True)
            user.save()
            user.set_password(str(s.newid))
            user.save()

        return HttpResponseRedirect(reverse(guide, kwargs={'room_name':s.session_name}))
    else:
        form = single_form()
    return render(request, 'single_form.html', {'form': form})


def double(request):
    if request.method == 'POST':
        form = double_form(request.POST)
        if form.is_valid():
            room = form.cleaned_data['room_name']
            player1 = form.cleaned_data['player1_name']
            player2 = form.cleaned_data['player2_name']

            colorNum = random.randrange(1,3)

            if colorNum == 1:
                p1_color = "white"
                p2_color = "black"
            else :
                p1_color = "black"
                p2_color = "white"

            if Session.objects.filter(session_name=room).exists():
                s = Session.objects.get(session_name=room)
            else:
                nid = makeRandomString()
                s = Session(newid=nid, session_name = str(room), status=True)
                s.save()

                player = Player(player_session=s, player1_name=player1, player2_name=player2, player1_color=p1_color, player2_color=p2_color)
                player.save()
                
                user1 = User.objects.create(username=str(player1), is_staff=True)
                user1.save()
                user1.set_password(str(s.newid))
                user1.save()
                user2 = User.objects.create(username=str(player2), is_staff=True)
                user2.save()
                user2.set_password(str(s.newid))
                user2.save()

            return HttpResponseRedirect(reverse(guide, kwargs={'room_name':room}))
    else:
        form = double_form()
    return render(request, 'double_form.html', {'form': form})


def guide(request,room_name):
    if Session.objects.filter(session_name=room_name).exists():
        s = Session.objects.get(session_name=room_name)
        p = Player.objects.get(player_session=s.newid)
    else:
        return redirect('home')
    if request.method == 'POST':
        if p.player2_name is None:
            return HttpResponseRedirect(reverse(single_game, kwargs={'session_key':s.newid}))
        else:
            return HttpResponseRedirect(reverse(double_game, kwargs={'session_key':room_name}))
    else:
        return render(request, 'guide.html', {'room_name':room_name, 'session_key': s.newid,
'P1': p.player1_name, 'P2': p.player2_name, 'P1_color': p.player1_color, 'P2_color': p.player2_color})


def single_game(request, session_key):
    s = Session.objects.get(newid=session_key)
    p = Player.objects.get(player_session=s.newid)

    if p.player1_color == "white":
        x = random.choice('ABCDEFGHIJKLMNOPQRS')
        y = random.randrange(1,20)
        data = {'room': s.newid, 'x1': x, 'y1': y, 'x2': '', 'y2': 0}
        requests.post('http://turnincode.cafe24.com:8880/api/sessions/'+str(s.newid)+'/blacks/', data=data)

    return render(request, 'single_room.html', {'room_name': s.session_name, 'P1': p.player1_name, 'P1_color': p.player1_color})


def double_game(request, session_key):
    if Session.objects.filter(session_name=session_key).exists():
        s = Session.objects.get(session_name=session_key)
        p = Player.objects.get(player_session=s.newid)
        return render(request, 'double_room.html', {'room_name': s.session_name, 'P1': p.player1_name, 'P2': p.player2_name, 'P1_color': p.player1_color, 'P2_color': p.player2_color})
    else:
        return redirect('home')


def watch(request):
    return render(request, 'list.html')


class JSONResponse(HttpResponse):
    def __init__(self, data, **kwargs):
        content = JSONRenderer().render(data)
        kwargs['content_type'] = 'application/json'
        super(JSONResponse, self).__init__(content, **kwargs)


def getSession(request):
    session_key = request.COOKIES.get(settings.SESSION_COOKIE_NAME)
    s = Session.objects.get(session_name=session_key)
    return JsonResponse(str(s.newid), safe=False)


def getSession2(request, room_name):
    s = Session.objects.get(session_name=room_name)
    return JsonResponse(str(s.newid), safe=False)


class SessionViewSet(NestedViewSetMixin, ModelViewSet):
    serializer_class = SessionSerializer
    queryset = Session.objects.all()


class UserViewSet(NestedViewSetMixin, ModelViewSet):
    serializer_clss = UserSerializer
    queryset = User.objects.all()
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)

 
class StoneViewSet(NestedViewSetMixin, ModelViewSet):
    serializer_class = StoneSerializer
    queryset = ResultOmok.objects.all()
'''
    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        headers = self.get_success_headers(serializer.data)

        tmp = Stone.objects.last()
        resultRoom = Session.objects.get(session_name = tmp.room).newid
        resultName = Session.objects.get(session_name = tmp.room).session_name
        resultColor = str(tmp.color)
        resultX1 = str(tmp.x1)
        resultY1 = tmp.y1
        resultX2 = str(tmp.x2)
        resultY2 = tmp.y2

        resultOmok = ResultOmok(room = resultRoom, color = resultColor, x = resultX1, y = resultY1)
        resultOmok.save()
        
        resultOmok = ResultOmok(room = resultRoom, color = resultColor, x = resultX2, y = resultY2)
        resultOmok.save()
         
        program_status = Session.objects.get(newid=resultRoom).status
        player = Player.objects.get(player_session=resultRoom)
        if(program_status is not False):
            if(player.player2_name is None):
                if(str(Stone.objects.last().color) == player.player1_color):
                    if(player.player1_color == "white"):
                        mColor = "black"
                    else:
                        mColor = "white"

                    time.sleep(2)
                    monkey.second_stone(request, resultRoom, mColor)
        else:
            print("session finish")

        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

    def perform_create(self, serializer):
        serializer.save()

#    def get_queryset(self):
#        session_key = self.request.COOKIES.get(settings.SESSION_COOKIE_NAME)
#        s = Session.objects.get(session_name=session_key)
#        return Stone.objects.filter(room=s.id)

'''
class BlackViewSet(NestedViewSetMixin, ModelViewSet):
    serializer_class = BlackSerializer
    queryset = Black.objects.all()

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        headers = self.get_success_headers(serializer.data)

        tmp = Black.objects.last()
        resultRoom = Session.objects.get(session_name=tmp.room).newid
        program_status = Session.objects.get(newid=resultRoom).status
        if(program_status is False):
            print("False")
            raise Exception('Status False')
        else:
            resultName = Session.objects.get(session_name=tmp.room).session_name
            resultColor = "black"
            resultX1 = str(tmp.x1)
            resultY1 = tmp.y1
            resultX2 = str(tmp.x2)
            resultY2 = tmp.y2
            resultOmok = ResultOmok(room=resultRoom, color = resultColor, x = resultX1 , y = resultY1)
            resultOmok.save()
            resultOmok = ResultOmok(room=resultRoom, color = resultColor, x = resultX2 , y = resultY2)
            resultOmok.save()

            player = Player.objects.get(player_session=resultRoom)
            if(player.player2_name is None):
                if(player.player1_color == "black"):
                    mColor = "white"
                    time.sleep(2)
                    monkey.second_stone(request, resultRoom, mColor)

            return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

    def perform_create(self, serializer):
        serializer.save()


class WhiteViewSet(NestedViewSetMixin, ModelViewSet):
    serializer_class = WhiteSerializer
    queryset = White.objects.all()

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        headers = self.get_success_headers(serializer.data)

        tmp = White.objects.last()
        resultRoom = Session.objects.get(session_name=tmp.room).newid
        program_status = Session.objects.get(newid=resultRoom).status
        if(program_status is False):
            print("False")
            raise Exception('Status False')
        else:
            resultName = Session.objects.get(session_name=tmp.room).session_name
            resultColor = "white"
            resultX1 = str(tmp.x1)
            resultY1 = tmp.y1
            resultX2 = str(tmp.x2)
            resultY2 = tmp.y2
            resultOmok = ResultOmok(room=resultRoom, color = resultColor, x = resultX1 , y = resultY1)
            resultOmok.save()
            resultOmok = ResultOmok(room=resultRoom, color = resultColor, x = resultX2 , y = resultY2)
            resultOmok.save()

            player = Player.objects.get(player_session=resultRoom)
            if(player.player2_name is None):
                if(player.player1_color == "white"):
                    mColor = "black"
                    time.sleep(2)
                    monkey.second_stone(request, resultRoom, mColor)

            return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

    def perform_create(self, serializer):
        serializer.save()


def ResultData(request, sessionid):
    tmp = ResultOmok.objects.filter(room=sessionid)
    black = tmp.filter(color="black")
    white = tmp.filter(color="white")

    bCount = black.count()
    wCount = white.count()

    s=None

    if Session.objects.filter(newid=sessionid).exists():
        s = Session.objects.get(newid=sessionid)

    row = list(ascii_uppercase)

    for i in row:
        for j in range(1,20):
            if tmp.filter(color="black",x=i, y=j).count() == 1:
                cnt=1
                for jj in range(1, 6):
                    if tmp.filter(color="black",x=i, y=j+jj).count() == 1:
                        cnt+=1
                if cnt == 6:
                    result = str('Black WIN !!! ')
                    print(result)
                    if s is not None:
                        s.status=False
                        s.save()
                    return JsonResponse(result , safe = False)
                else:
                    cnt =0
            elif tmp.filter(color="white",x=i, y=j).count() == 1:
                cnt=1
                for jj in range(1, 6):
                    if tmp.filter(color="white",x=i, y=j+jj).count() == 1:
                        cnt+=1
                if cnt == 6:
                    result = str('White WIN !!! ')
                    print(result)
                    if s is not None:
                        s.status=False
                        s.save()
                    return JsonResponse(result , safe = False)
                else:
                   cnt=0
    for j in range(1,20):
        for i in row:
            if black.filter(x=i, y=j).count() == 1:
                cnt = 1
                for jj in range(1, 6):
                    if black.filter(x=chr(ord(i)+jj), y=j).count() == 1:
                        cnt +=1
                if cnt == 6:
                    result = str('Black WIN !!!! ')
                    print(result)
                    if s is not None:
                        s.status=False
                        s.save()
                    return JsonResponse(result, safe = False)
                else:
                    cnt =0
            elif white.filter(x=i, y=j).count() == 1:
                cnt = 1
                for jj in range(1,6):
                    if white.filter(x=chr(ord(i)+jj), y=j).count() == 1:
                        cnt +=1
                if cnt == 6:
                    result = str('White WIN !!!! ')
                    print(result)
                    if s is not None:
                        s.status=False
                        s.save()
                    return JsonResponse(result, safe = False)
                else:
                    cnt =0


    for i in range(1,20):
        for j in row:
            if black.filter(x=j, y=i).count() == 1:
                cnt = 1
                for jj in range(1,6):
                    if tmp.filter(color="black", x=chr(ord(j)+jj) , y = i+jj).count()==1:
                        cnt+=1
                if cnt == 6:
                    result = str('Black WIN !!! ')
                    if s is not None:
                        s.status=False
                        s.save()
                    return JsonResponse(result, safe=False)
                else:
                    cnt = 0
            if white.filter(x=j, y=i).count() == 1:
                cnt = 1
                for jj in range(1,6):
                    if tmp.filter(color="white", x=chr(ord(j)+jj) , y = i+jj).count()==1:
                        cnt+=1
                if cnt == 6:
                    result = str('White WIN !!! ')
                    if s is not None:
                        s.status=False
                        s.save()
                    return JsonResponse(result, safe=False)
                else:
                    cnt = 0

    for i in row:
        for j in range(1,20):
            if black.filter(x=i, y=j).count() == 1:
                cnt = 1
                for jj in range(1,6):
                    if tmp.filter(color="black", x=chr(ord(i)+jj) , y = j-jj).count()==1:
                        cnt+=1
                if cnt == 6:
                    result = str('Black WIN !!! ')
                    if s is not None:
                        s.status=False
                        s.save()
                    return JsonResponse(result, safe=False)
                else:
                    cnt = 0
            if white.filter(x=i, y=j).count() == 1:
                cnt = 1
                for jj in range(1,6):
                    if tmp.filter(color="white", x=chr(ord(i)+jj) , y = j-jj).count()==1:
                        cnt+=1
                if cnt == 6:
                    result = str('White WIN !!! ')
                    if s is not None:
                        s.status=False
                        s.save()
                    return JsonResponse(result, safe=False)
                else:
                    cnt = 0  

    return HttpResponse()
