from django.conf.urls import url
from django.urls import path, include
from rest_framework.urlpatterns import format_suffix_patterns
from . import views


urlpatterns = [
    url(r'^home/', views.home, name='home'),
    url('', include('django.contrib.auth.urls')),
    url(r'^index/', views.index, name='index'),
    url(r'^resultdata/(?P<sessionid>[^/]+)/$', views.ResultData),
    url(r'^getsession/$', views.getSession),
    url(r'^getsession2/(?P<room_name>[^/]+)/', views.getSession2),
    url(r'^manager/', views.managePage, name='managePage'),
    url(r'^guide/(?P<room_name>[^/]+)/', views.guide, name='guide'),
    url(r'^form/', views.form, name='form'),
    url(r'^game/(?P<session_name>[^/]+)/$', views.game, name='game'),
    url(r'^watch/', views.watch, name='watch'),
    url(r'^createSession/', views.createSession, name='createSession'),
    url(r'^manageSession/(?P<room_name>[^/]+)/', views.manageSession, name='manageSession'),
]

#urlpatterns = format_suffix_patterns(urlpatterns)
