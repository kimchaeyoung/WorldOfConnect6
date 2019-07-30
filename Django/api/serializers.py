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
		fields = ('colorid', 'session_name', 'status')

class WhiteSessionSerializer(serializers.ModelSerializer):
	class Meta:
		model = whiteSession
		fields = ('colorid', 'session_name', 'status')


class UserSerializer(serializers.ModelSerializer):
        stones = serializers.PrimaryKeyRelatedField(many=True, queryset=Stone.objects.all())
        class Meta:
                model = User
                fields = ('id', 'username', 'stones')

'''
class StoneSerializer(serializers.ModelSerializer):
	class Meta:
		model = Stone
		fields = ('id', 'room', 'color', 'x1', 'y1', 'x2', 'y2')
'''

class StoneSerializer(serializers.ModelSerializer):
	class Meta:
		model = ResultOmok
		fields = ('id', 'room', 'color', 'x', 'y')

class BlackSerializer(serializers.ModelSerializer):
	class Meta:
		model = Black
		fields = ('id', 'room', 'x1', 'y1', 'x2', 'y2')

class WhiteSerializer(serializers.ModelSerializer):
	class Meta:
		model = White
		fields = ('id', 'room', 'x1', 'y1', 'x2', 'y2')
