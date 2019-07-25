from rest_framework import serializers, fields
from .models import *


class SessionSerializer(serializers.ModelSerializer):
	class Meta:
		model = Session
		fields = ('id','color', 'session_name', 'status')


class StoneSerializer(serializers.ModelSerializer):
	class Meta:
		model = Stone
		fields = ('id', 'room', 'color', 'x1', 'y1', 'x2', 'y2')
