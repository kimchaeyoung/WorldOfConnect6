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

def manageSession(request, room_name):
    return render(request, 'manageSession.html', {'room_name':room_name})

def createSession(request):
    return render(request, 'createSession.html')

def watch(request):
    gamelists = Session.objects.filter(color=None)
    try:
        return render(request, 'list.html', {'gamelists': gamelists})
    except:
        return render(request, 'list.html', {'error': 'There is nothing in progress.'})

def home(request):
        return render(request, 'home.html')


def form(request):
    if request.method == 'POST':
        form = player_form(request.POST)
        if form.is_valid():
            room = form.cleaned_data['room_name']
            return HttpResponseRedirect(reverse(guide, kwargs={'room_name':room}))
    else:
        form = player_form()
    return render(request, 'createSession.html', {'form': form})

def guide(request,room_name):
    colorNum = random.randrange(1,3)
    colorNum = 2
    if colorNum == 1:
        color = "white"
    else :
        color = "black"

    if Session.objects.filter(session_name=room_name).exists():
        s = Session.objects.get(session_name=room_name)
    else:
        nid = makeRandomString()
        s = Session(newid=nid, session_name = str(room_name), color=color, status=True)
        s.save()
    if request.method == 'POST':
        return HttpResponseRedirect(reverse(game, kwargs={'session_name':s.session_name}))
    else:
        return render(request, 'guide.html', {'room_name':room_name, 'session_key': s.newid, 'color': s.color})

def managePage(request):
        if request.user.is_authenticated:
                uid = request.user.id
                user = User.objects.get(id=uid)
                allgamelists = Session.objects.filter(color=None)

                return render(request, 'manage.html', {'user':user, 'allgamelists':allgamelists})

        else:
                return redirect('home')

class JSONResponse(HttpResponse):
    def __init__(self, data, **kwargs):
        content = JSONRenderer().render(data)
        kwargs['content_type'] = 'application/json'
        super(JSONResponse, self).__init__(content, **kwargs)

def makeRandomString():
    randomStream = ""
    for i in range(0,6):
        randomStream += str(random.choice(string.ascii_letters))
    return randomStream

def game(request, session_name):
    if Session.objects.filter(session_name=session_name).exists():
        s = Session.objects.get(session_name=session_name)   
        return render(request, 'room.html', {'room_name': s.session_name})
    else:
        return redirect('home')

def index(request):
    colorNum = random.randrange(1,3)
    colorNum = 1
    if colorNum == 1:
        color = "white"
    else :
        color = "black"
    
    session_key = request.COOKIES.get(settings.SESSION_COOKIE_NAME)
    
    if session_key is None:
        request.session.set_test_cookie()
        return render(request, 'index.html', {'color':"No Session ID, refresh page!"})

    elif Session.objects.filter(session_name=session_key).exists():
        s = Session.objects.get(session_name=session_key)
        return render(request, 'index.html', {'session_name':s.newid, 'session_id':s.newid, "color":color})
    
    else: 
        nid = makeRandomString()
        s = Session(newid=nid, session_name = str(session_key), color=color, status=True)
        s.save()

        if s.color == "white":
            time.sleep(1)
            monkey.first_stone(request, str(s.newid))
            
    return render(request, 'index.html', {'session_name':s.newid, 'session_id':s.newid, "color":s.color})


def getSession(request):
    session_key = request.COOKIES.get(settings.SESSION_COOKIE_NAME)
    s = Session.objects.get(session_name=session_key)
    return JsonResponse(str(s.newid), safe=False)


class SessionViewSet(NestedViewSetMixin, ModelViewSet):
    serializer_class = SessionSerializer
    queryset = Session.objects.all()
 
class StoneViewSet(NestedViewSetMixin, ModelViewSet):
    serializer_class = StoneSerializer
    queryset = Stone.objects.all()

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
        clientColor = Session.objects.get(newid=resultRoom).color
        if(program_status is not False):
            if(clientColor is not None):
                if(str(Stone.objects.last().color) == clientColor):
                    if(clientColor == "white"):
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

    def get_queryset(self):
        print("here")
        session_key = self.request.COOKIES.get(settings.SESSION_COOKIE_NAME)
        s = Session.objects.get(session_name=session_key)
        return Stone.objects.filter(room=s.id)

class BlackViewSet(NestedViewSetMixin, ModelViewSet):
    serializer_class = BlackSerializer
    queryset = Black.objects.all()

class WhiteViewSet(NestedViewSetMixin, ModelViewSet):
    serializer_class = WhiteSerializer
    queryset = White.objects.all()


def getSession2(request, room_name):
    s = Session.objects.get(session_name=room_name)
    return JsonResponse(str(s.newid), safe=False)
    
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
                    return JsonResponse(result, safe=False)
                else:
                    cnt = 0  

    return HttpResponse()
