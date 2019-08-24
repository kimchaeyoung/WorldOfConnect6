from django.conf.urls import url
from django.urls import path, include
from rest_framework.urlpatterns import format_suffix_patterns
from . import views


urlpatterns = [
    path('', views.home, name='home'),
    url(r'^rule/', views.rule, name='rule'),
    url(r'^player_api/', views.api, name='api'),
    url(r'^player_code_example/', views.api_example, name='api_example'),
    url(r'^single/', views.single, name='single'),
    url(r'^double/', views.double, name='double'),
    url(r'^guide/(?P<room>[^/]+)/', views.guide, name='guide'),
    url(r'^double_game/(?P<session_key>[^/]+)/$', views.double_game, name='double_game'),
    url(r'^double_status/(?P<session_key>[^/]+)/$', views.double_status, name='double_status'),  
    url(r'^double_timer/(?P<session_key>[^/]+)/$', views.double_timer, name='double_timer'),
    url(r'^resultdata/(?P<sessionid>[^/]+)/$', views.ResultData),
    url(r'^watch/', views.watch, name='watch'),
]

#urlpatterns = format_suffix_patterns(urlpatterns)
