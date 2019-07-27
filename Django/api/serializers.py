from rest_framework import serializers, fields
from .models import *


class SessionSerializer(serializers.ModelSerializer):
	class Meta:
		model = Session
		fields = ('newid', 'session_name', 'status')

class StoneSerializer(serializers.ModelSerializer):
	class Meta:
		model = Stone
		fields = ('id', 'room', 'color', 'x1', 'y1', 'x2', 'y2')


class BlackSerializer(serializers.ModelSerializer):
	class Meta:
		model = Black
		fields = ('id', 'room', 'x1', 'y1', 'x2', 'y2')

class WhiteSerializer(serializers.ModelSerializer):
	class Meta:
		model = White
		fields = ('id', 'room', 'x1', 'y1', 'x2', 'y2')
