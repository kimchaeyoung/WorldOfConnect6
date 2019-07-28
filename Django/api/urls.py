from django.conf.urls import url
from django.urls import path, include
from rest_framework.urlpatterns import format_suffix_patterns
from . import views


urlpatterns = [
    url(r'^home/', views.home, name='home'),
    url('', include('django.contrib.auth.urls')),
    url(r'^single/', views.single, name='single'),
    url(r'^double/', views.double, name='double'),
    url(r'^guide/(?P<room_name>[^/]+)/', views.guide, name='guide'),
    url(r'^single_game/(?P<session_key>[^/]+)/$', views.single_game, name='single_game'),
    url(r'^double_game/(?P<session_key>[^/]+)/$', views.double_game, name='double_game'),
    url(r'^resultdata/(?P<sessionid>[^/]+)/$', views.ResultData),
    url(r'^api-auth/', include('rest_framework.urls',
                               namespace='rest_framework')),
    url(r'^getsession/$', views.getSession),
    url(r'^getsession2/(?P<room_name>[^/]+)/', views.getSession2),
    url(r'^watch/', views.watch, name='watch'),
]

#urlpatterns = format_suffix_patterns(urlpatterns)
