from rest_framework import serializers, fields
from .models import *
from django.contrib.auth.models import User

class SessionSerializer(serializers.ModelSerializer):
	class Meta:
		model = Session
		fields = ('session_name', 'blackid', 'whiteid', 'status', 'mode')


class BlackSessionSerializer(serializers.ModelSerializer):
	class Meta:
		model = blackSession
		fields = ('colorid', 'session_name', 'status', 'timer')

class WhiteSessionSerializer(serializers.ModelSerializer):
	class Meta:
		model = whiteSession
		fields = ('colorid', 'session_name', 'status', 'timer')

class StoneSerializer(serializers.ModelSerializer):
	class Meta:
		model = ResultOmok
		fields = ('id', 'room', 'color', 'x', 'y')

class BlackSerializer(serializers.ModelSerializer):
	class Meta:
		model = Black
		fields = ('id', 'room', 's1', 's2')

class WhiteSerializer(serializers.ModelSerializer):
	class Meta:
		model = White
		fields = ('id', 'room', 's1', 's2')
