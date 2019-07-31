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
import smartmonkey
import randomstone

from .forms import *

import pytz
utc = pytz.UTC
from datetime import datetime
import threading


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
                colorNum = random.randrange(1,3)
                if colorNum == 1:
                    wid = makeRandomString()
                    s = whiteSession(colorid=wid, session_name=player, status=False, name=player)
                    s.save()
                    bid = makeRandomString()
                    s = blackSession(colorid=bid, session_name=player, status=False, name="Monkey")
                    s.save()
                    s = Session(session_name=player, blackid=bid, whiteid=wid, status=False, mode="S")
                    s.save()
                else :
                    wid = makeRandomString()
                    s = whiteSession(colorid=wid, session_name=player, status=False, name="Monkey")
                    s.save()
                    bid = makeRandomString()
                    s = blackSession(colorid=bid, session_name=player, status=False, name=player)
                    s.save()
                    s = Session(session_name=player, blackid=bid, whiteid=wid, status=False, mode="S")
                    s.save()
                randomstone.random_stone(request,player)   
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

            if not Session.objects.filter(session_name=room).exists():

                colorNum = random.randrange(1,3)

                if colorNum == 1:
                    wid = makeRandomString()
                    s = whiteSession(colorid=wid, session_name=room, status=False, name=player1)                                          
                    s.save()                                                                                               
                    bid = makeRandomString()                                                                               
                    s = blackSession(colorid=bid, session_name=room, status=False, name=player2)
                    s.save()                                                                                               
                    s = Session(session_name = room, blackid=bid, whiteid=wid, status=False, mode="D")                      
                    s.save()
  
                else :
                    p1_color = "black"
                    p2_color = "white"
                    wid = makeRandomString()
                    s = whiteSession(colorid=wid, session_name=room, status=False, name=player2)
                    s.save()
                    bid = makeRandomString()
                    s = blackSession(colorid=bid, session_name=room, status=False, name=player1)
                    s.save()
                    s = Session(session_name = room, blackid=bid, whiteid=wid, status=False, mode="D")
                    s.save()

                randomstone.random_stone(request,room)   
      
            return HttpResponseRedirect(reverse(guide, kwargs={'room':room}))
    else:
        form = double_form()
    return render(request, 'double_form.html', {'form': form})


def guide(request,room):
    if Session.objects.filter(session_name=room).exists():
        s = Session.objects.get(session_name=room)
        ws = whiteSession.objects.get(session_name=room)
        bs = blackSession.objects.get(session_name=room)
    else:
        return redirect('home')

    if request.method == 'POST':
        return HttpResponseRedirect(reverse(double_game, kwargs={'session_key':room}))
    else:
        return render(request, 'guide.html', {'room_name':room, 'P1_key': bs.colorid, 'P2_key': ws.colorid, 'P1': bs.name, 'P2': ws.name, 'P1_color': "black", 'P2_color': "white"})

def double_game(request, session_key):
    if Session.objects.filter(session_name=session_key).exists():
        s = Session.objects.get(session_name=session_key)
        bs = blackSession.objects.get(session_name=session_key)
        ws = whiteSession.objects.get(session_name=session_key)
        url = request.build_absolute_uri('/')[:-1]
        if bs.name == "Monkey":
            if not Black.objects.filter(room=bs.colorid).exists():
                requests.get(url+"/api/sessions/"+bs.session_name+"/stones/?colorid="+bs.colorid)
                smartmonkey.first_stone(request, bs.colorid)
        elif ws.name=="Monkey":
            requests.get(url+"/api/sessions/"+ws.session_name+"/stones/?colorid="+ws.colorid)
        return render(request, 'double_room.html', {'room_name': session_key, 'P1': bs.name, 'P2': ws.name, 'P1_color': "black", 'P2_color': "white"})
    else:
        return redirect('home')

def enter(player):
    if player.status is False:
        player.status = True
        player.save()

def double_status(request, session_key):
    if Session.objects.filter(session_name=session_key).exists():
        bs = blackSession.objects.get(session_name=session_key)
        ws = whiteSession.objects.get(session_name=session_key)
        s = Session.objects.get(session_name=session_key)
        if s.status is False:
            player1_status = "대기중입니다"
            player2_status = "대기중입니다"
            if bs.status is True:
                player1_status = "입장하였습니다"
            if ws.status is True:
                player2_status = "입장하였습니다"
            if bs.status is True and ws.status is True:
                s.status = True
                s.save()
        else:
            player1_status = "입장하였습니다"
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


def timer(count, gettime, key, colorid):
    if Session.objects.get(session_name=key).blackid == colorid:
        ts = blackSession.objects.get(session_name=key)
    elif Session.objects.get(session_name=key).whiteid == colorid:
        ts = whiteSession.objects.get(session_name=key)
    else:
        print("error")
        print(colorid)
        print(Session.objects.get(session_name=key).blackid)
        print(Session.objects.get(session_name=key).whiteid)
    count-=1
    ts.timer = count
    ts.save()
    posttime = ts.post_time
    
    t = threading.Timer(1, timer, args=[count, gettime, key, colorid])
    t.start()

    if posttime is not None:
        if gettime < posttime:
            t.cancel()

    if count == 1:
        ts.status = False
        ts.save()
        t.cancel()



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

    def get_queryset(self):
        gettime = utc.localize(datetime.now())
        room = self.kwargs['parent_lookup_room']
        s = Session.objects.get(session_name=room)
        colorid = self.request.GET.get('colorid', None)
        if colorid == "admin":
            return ResultOmok.objects.filter(room=room)
        elif colorid == s.blackid:
            bs = blackSession.objects.get(session_name=room)
            if ResultOmok.objects.filter(room=room).last().color=="red":
                enter(bs)
            elif ResultOmok.objects.filter(room=room).last().color=="white":
                timer(10, gettime, room, colorid)
            return ResultOmok.objects.filter(room=room)
        elif colorid == s.whiteid:
            ws = whiteSession.objects.get(session_name=room)
            if ResultOmok.objects.filter(room=room).last().color=="red":
                enter(ws)
            elif ResultOmok.objects.filter(room=room).last().color=="black":
                timer(10, gettime, room, colorid)
            return ResultOmok.objects.filter(room=room)
        else:
            print("Cannot Access")

class BlackViewSet(NestedViewSetMixin, ModelViewSet):
    serializer_class = BlackSerializer
    queryset = Black.objects.all()

    def create(self, request, *args, **kwargs):
        s = blackSession.objects.get(colorid=self.kwargs['parent_lookup_room'])
        s.post_time = utc.localize(datetime.now())
        s.timer = 7
        a = Session.objects.get(session_name=s.session_name)
        if(a.status is False):
            raise Exception('Status False')
        elif(s.status is False):
            raise Exception('Status False')
        else:
            serializer = self.get_serializer(data=request.data)
            serializer.is_valid(raise_exception=True)
            serializer.save()
            headers = self.get_success_headers(serializer.data)

            blacks = Black.objects.filter(room=s.colorid)
            tmp = blacks.last()

            resultRoom = s.session_name
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

            ws = whiteSession.objects.get(session_name=s.session_name)
            s.status = False
            ws.status = True
            s.save()
            ws.save()
            if ws.name == "Monkey":
                time.sleep(2)
                smartmonkey.second_stone(request, resultRoom, ws.colorid, "white")

            return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)


class WhiteViewSet(NestedViewSetMixin, ModelViewSet):
    serializer_class = WhiteSerializer
    queryset = White.objects.all()
    
    def create(self, request, *args, **kwargs):
        s = whiteSession.objects.get(colorid=self.kwargs['parent_lookup_room'])
        s.post_time = utc.localize(datetime.now())
        s.timer = 10
        a = Session.objects.get(session_name=s.session_name)
        if(a.status is False):
            raise Exception('Status False')
        elif(s.status is False):
            raise Exception('Status False')
        elif not Black.objects.filter(room=Session.objects.get(session_name=s.session_name).blackid).exists():
            raise Exception('Not Your Turn')
        else:
            serializer = self.get_serializer(data=request.data)
            serializer.is_valid(raise_exception=True)
            serializer.save()
            headers = self.get_success_headers(serializer.data)

            whites = White.objects.filter(room=s.colorid)
            tmp = whites.last()

            resultRoom = s.session_name
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

            bs = blackSession.objects.get(session_name=s.session_name)
            s.status = False
            bs.status = True
            s.save()
            bs.save()
            if bs.name == "Monkey":
                time.sleep(2)
                smartmonkey.second_stone(request,resultRoom, bs.colorid, "black")

            return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)


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
