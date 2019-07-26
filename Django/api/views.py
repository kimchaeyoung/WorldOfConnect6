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

import random, requests, time
from django.conf import settings
from string import ascii_uppercase
from django.urls import reverse
from rest_framework.viewsets import ModelViewSet

from rest_framework_extensions.mixins import NestedViewSetMixin

from django.contrib.auth.models import User

import sys, os
sys.path.append(os.path.abspath("../player_example/"))
import monkey


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

def managePage(request):
        if request.user.is_authenticated:
                uid = request.user.id
                user = User.objects.get(id=uid)
                mygamelists = Session.objects.filter(manager_id=user)
                allgamelists = Session.objects.filter(color=None)

                return render(request, 'manage.html', {'user':user, 'mygamelists':mygamelists, 'allgamelists':allgamelists})

        else:
                return redirect('home')

class JSONResponse(HttpResponse):
    def __init__(self, data, **kwargs):
        content = JSONRenderer().render(data)
        kwargs['content_type'] = 'application/json'
        super(JSONResponse, self).__init__(content, **kwargs)

def room(request, room_name):
    if request.user.is_authenticated:
        if Session.objects.filter(session_name=room_name).exists():
            s = Session.objects.get(session_name=room_name)

        else:
            uid = request.user.id
            user = User.objects.get(id=uid)
            s = Session(session_name = str(room_name), manager_id=str(user), status=True)
            s.save()


        return HttpResponseRedirect(reverse(game, kwargs={'session_key':s.id}))
    
    else:
        return redirect('home')

def game(request, session_key):
    if Session.objects.filter(id=session_key).exists():
        return render(request, 'room.html', {'session_key':session_key})    
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
        return render(request, 'index.html', {'session_key':"No Session ID, refresh page!"})

    elif Session.objects.filter(session_name=session_key).exists():
        s = Session.objects.get(session_name=session_key)
        return render(request, 'index.html', {'session_key':s.id, "color":color})
    
    else: 
        s = Session(session_name = str(session_key), color=color, status=True)
        s.save()

        if s.color == "white":
            time.sleep(1)
            monkey.first_stone(request, str(s.id))
            
    return render(request, 'index.html', {'session_key':str(s.id), "color":s.color})


def getSession(request):
    session_key = request.COOKIES.get(settings.SESSION_COOKIE_NAME)
    s = Session.objects.get(session_name=session_key)
    return JsonResponse(str(s.id), safe=False)


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
        resultRoom = Session.objects.get(session_name = tmp.room).id
        resultColor = str(tmp.color)
        resultX1 = str(tmp.x1)
        resultY1 = tmp.y1
        resultX2 = str(tmp.x2)
        resultY2 = tmp.y2

        resultOmok = ResultOmok(room = resultRoom, color = resultColor, x = resultX1, y = resultY1)
        resultOmok.save()
        
        resultOmok = ResultOmok(room = resultRoom, color = resultColor, x = resultX2, y = resultY2)
        resultOmok.save()
         
        program_status = Session.objects.get(id=resultRoom).status
        clientColor = Session.objects.get(id=resultRoom).color
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

def ResultData(request, sessionid):
    tmp = ResultOmok.objects.filter(room=sessionid)
    black = tmp.filter(color="black")
    white = tmp.filter(color="white")

    bCount = black.count()
    wCount = white.count()

    s=None

    if Session.objects.filter(id=sessionid).exists():
        s = Session.objects.get(id=sessionid)

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
