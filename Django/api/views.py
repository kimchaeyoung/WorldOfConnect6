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
import datetime
import random, requests, time, string
from django.conf import settings
from string import ascii_uppercase
from django.urls import reverse
from rest_framework.viewsets import ModelViewSet

from rest_framework_extensions.mixins import NestedViewSetMixin

from django.contrib.auth.models import User

import sys, os
sys.path.append(os.path.abspath("../player_example/"))
import smartmonkey

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
            if Session.objects.filter(session_name=player).exists():
                s = Session.objects.get(session_name=player)
            else: 
                wid = makeRandomString()
                s = whiteSession(colorid=wid, session_name=player, status=True)
                s.save()
                bid = makeRandomString()
                s = blackSession(colorid=bid, session_name=player, status=True)
                s.save()
                s = Session(session_name=player, blackid=bid, whiteid=wid, status=True, mode="S")
                s.save()
                colorNum = random.randrange(1,3)
                if colorNum == 1:
                    mcolor = "white"
                    ycolor = "black"
                else :
                    mcolor = "black"
                    ycolor = "white"
                p = Player(player_session=s, player1_name=player, player2_name=None,  player1_color=mcolor, player2_color=ycolor)
                p.save() 
            return HttpResponseRedirect(reverse(guide, kwargs={'room':player})) 
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

            if not Session.objects.filter(session_name=room).exists():
                wid = makeRandomString()
                s = whiteSession(colorid=wid, session_name=room, status=True)
                s.save()
                bid = makeRandomString()
                s = blackSession(colorid=bid, session_name=room, status=True)
                s.save()
                s = Session(session_name = room, blackid=bid, whiteid=wid, status=True, mode="D")
                s.save()
                colorNum = random.randrange(1,3)
                if colorNum == 1:
                    p1_color = "white"
                    p2_color = "black"
                else:
                    p1_color = "black"
                    p2_color = "white"
                player = Player(player_session=s, player1_name=player1, player2_name=player2, player1_color=p1_color, player2_color=p2_color)
                player.save()

            return HttpResponseRedirect(reverse(guide, kwargs={'room':room}))
    else:
        form = double_form()
    return render(request, 'double_form.html', {'form': form})


def guide(request,room):
    if Session.objects.filter(session_name=room).exists():
        s = Session.objects.get(session_name=room)
        p = Player.objects.get(player_session=s)
    else:
        return redirect('home')

    if request.method == 'POST':
        if p.player2_name is None:
            return HttpResponseRedirect(reverse(single_game, kwargs={'session_key':room}))
        else:
            return HttpResponseRedirect(reverse(double_game, kwargs={'session_key':room}))
    else:
        bs = blackSession.objects.get(session_name=room)
        ws = whiteSession.objects.get(session_name=room)
        if p.player1_color=="black":
            return render(request, 'guide.html', {'room_name':room, 'P1_key': bs.colorid, 'P2_key': ws.colorid, 'P1': p.player1_name, 'P2': p.player2_name, 'P1_color': p.player1_color, 'P2_color': p.player2_color})
        elif p.player1_color=="white":
            return render(request, 'guide.html', {'room_name':room, 'P1_key':ws.colorid, 'P2_key': bs.colorid, 'P1': p.player1_name, 'P2': p.player2_name, 'P1_color': p.player1_color, 'P2_color': p.player2_color})

def single_game(request, session_key):
    s = Session.objects.get(session_name=session_key)
    p = Player.objects.get(player_session=session_key)
    if p.player1_color == "white":
        b = blackSession.objects.get(session_name=session_key)
        if not Black.objects.filter(room=b.colorid).exists():
            smartmonkey.first_stone(request, b.colorid) 
    return render(request, 'single_room.html', {'room_name': s.session_name, 'P1': p.player1_name, 'P1_color': p.player1_color})


def double_game(request, session_key):
    if Session.objects.filter(session_name=session_key).exists():
        s = Session.objects.get(session_name=session_key)
        if s.mode == "S": 
            return redirect('home')
        p = Player.objects.get(player_session=session_key)
        return render(request, 'double_room.html', {'room_name': session_key, 'P1': p.player1_name, 'P2': p.player2_name, 'P1_color': p.player1_color, 'P2_color': p.player2_color})
    else:
        return redirect('home')

def single_enter(player):
    if player.player1_status is False:
        player.player1_status = True
        player.save()

def double_enter(player, num):
    if num == 1:
        if player.player1_status is False:
            player.player1_status = True
    else:
        if player.player2_status is False:
            player.player2_status = True
    player.save()

def single_status(request, session_key):
    if Session.objects.filter(session_name=session_key).exists():
        p = Player.objects.get(player_session=session_key)
        if p.player1_status is True:
            return JsonResponse("입장하였습니다", safe=False)
    return HttpResponse()          

def double_status(request, session_key):
    if Session.objects.filter(session_name=session_key).exists():
        p = Player.objects.get(player_session=session_key)
        player1_status = "대기중입니다"
        player2_status = "대기중입니다"
        if p.player1_status is True:
            player1_status = "입장하였습니다"
        if p.player2_status is True:
            player2_status = "입장하였습니다"
        
        status = {'player1_status' : player1_status , 'player2_status' : player2_status}
        return JsonResponse(status, safe=False)
    return HttpResponse()          


def watch(request):
    return render(request, 'list.html')


class JSONResponse(HttpResponse):
    def __init__(self, data, **kwargs):
        content = JSONRenderer().render(data)
        kwargs['content_type'] = 'application/json'
        super(JSONResponse, self).__init__(content, **kwargs)

def gettime(request):
    time = datetime.datetime.now()
    return JsonResponse(time, safe=False)

def getdiff(request, first, second):
    diff = first - second
    return JsonResponse(diff.seconds, safe=False)

class SessionViewSet(NestedViewSetMixin, ModelViewSet):
    serializer_class = SessionSerializer
    queryset = Session.objects.all()

class BlackSessionViewSet(NestedViewSetMixin, ModelViewSet):
    serializer_class = BlackSessionSerializer
    queryset = blackSession.objects.all()

class WhiteSessionViewSet(NestedViewSetMixin, ModelViewSet):
    serializer_class = WhiteSessionSerializer
    queryset = whiteSession.objects.all()
 
class StoneViewSet(NestedViewSetMixin, ModelViewSet):
    serializer_class = StoneSerializer
    queryset = ResultOmok.objects.all()

class BlackViewSet(NestedViewSetMixin, ModelViewSet):
    serializer_class = BlackSerializer
    queryset = Black.objects.all()

    def create(self, request, *args, **kwargs):

        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        headers = self.get_success_headers(serializer.data)

        s = blackSession.objects.get(colorid=self.kwargs['parent_lookup_room'])
        blacks = Black.objects.filter(room=s.colorid)
        tmp = blacks.last()

#        s = Session.objects.get(newid=self.kwargs['parent_lookup_room'])
#        whites = White.objects.filter(room=s.newid)
#        tmp2 = whites.last()
#        st = tmp2.get_time
#        et = tmp.get_time
#        diff = et - st
#        if(diff.seconds>7):
#            raise Exception('Time Over')

        resultRoom = s.session_name
        program_status = s.status
        if(program_status is False):
            print("False")
            raise Exception('Status False')
        else:
            resultColor = "black"
            resultS1 = tmp.s1
            resultS2 = tmp.s2
            resultX1 = resultS1[0]
            resultY1 = resultS1[1:]
            if len(resultS2) == 0:
                resultX2 = ""
                resultY2 = 0 
            else:
                resultX2 = resultS2[0]
                resultY2 = resultS2[1:]
            resultOmok = ResultOmok(room=resultRoom, color = resultColor, x = resultX1 , y = resultY1)
            resultOmok.save()
            resultOmok = ResultOmok(room=resultRoom, color = resultColor, x = resultX2 , y = resultY2)
            resultOmok.save()

            player = Player.objects.get(player_session=resultRoom)
            if(player.player2_name is None):
                if(player.player1_color == "black"):
                    t = whiteSession.objects.get(session_name=s.session_name)
                    mColor = "white"
                    time.sleep(2)
                    smartmonkey.second_stone(request, resultRoom, t.colorid, mColor)

            return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

    def perform_create(self, serializer):
        serializer.save()

    def get_queryset(self):
        s = blackSession.objects.get(colorid=self.kwargs['parent_lookup_room'])
        player = Player.objects.get(player_session=s.session_name)
        if player.player2_name is None:
            single_enter(player)
        else:
            if player.player1_color == "white":
                double_enter(player,1)
            else:
                double_enter(player,2)
#        blacks = Black.objects.filter(room=s.newid)
#        if blacks is not None:
#            if blacks.last().get_time is None:
#                tmp = blacks.last()
#                tmp.get_time = datetime.datetime.now()
#                tmp.save()
        return Black.objects.filter(room=s.colorid)



class WhiteViewSet(NestedViewSetMixin, ModelViewSet):
    serializer_class = WhiteSerializer
    queryset = White.objects.all()
    
    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        headers = self.get_success_headers(serializer.data)

        s = whiteSession.objects.get(colorid=self.kwargs['parent_lookup_room'])
        whites = White.objects.filter(room=s.colorid)
        tmp = whites.last()

        resultRoom = s.session_name
        program_status = s.status
        if(program_status is False):
            raise Exception('Status False')
        else:
            resultColor = "white"
            resultS1 = tmp.s1
            resultS2 = tmp.s2
            resultX1 = resultS1[0]
            resultY1 = resultS1[1:]
            resultX2 = resultS2[0]
            resultY2 = resultS2[1:]
            resultOmok = ResultOmok(room=resultRoom, color = resultColor, x = resultX1 , y = resultY1)
            resultOmok.save()
            resultOmok = ResultOmok(room=resultRoom, color = resultColor, x = resultX2 , y = resultY2)
            resultOmok.save()

            player = Player.objects.get(player_session=resultRoom)
            if(player.player2_name is None):
                if(player.player1_color == "white"):
                    t = blackSession.objects.get(session_name=s.session_name)
                    mColor = "black"
                    time.sleep(2)
                    smartmonkey.second_stone(request,resultRoom, t.colorid, mColor)

            return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

    def perform_create(self, serializer):
        serializer.save()
  
    def get_queryset(self):
        s = whiteSession.objects.get(colorid=self.kwargs['parent_lookup_room'])
        player = Player.objects.get(player_session=s.session_name)
        if player.player2_name is None:
            single_enter(player)
        else:
            if player.player1_color == "black":
                double_enter(player,1)
            else:
                double_enter(player,2)
#        whites = White.objects.filter(room=s.newid)
#        if(whites.last().get_time is None):
#            tmp = whites.last()
#            tmp.get_time = datetime.datetime.now()
#            tmp.save()
        return White.objects.filter(room=s.colorid)


def ResultData(request, sessionid):
    tmp = ResultOmok.objects.filter(room=sessionid)
    black = tmp.filter(color="black")
    white = tmp.filter(color="white")

    bCount = black.count()
    wCount = white.count()

    s=None

    if Session.objects.filter(session_name=sessionid).exists():
        s = Session.objects.get(session_name=sessionid)

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
