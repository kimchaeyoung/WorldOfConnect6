from __future__ import unicode_literals
from django.db import models

class Session(models.Model):
	MODE = (('S', 'Single'), ('D', 'Double'))	
	session_name = models.CharField(primary_key=True, max_length=200, unique=True)
	blackid = models.CharField(max_length=10, unique=True)
	whiteid = models.CharField(max_length=10, unique=True)
	status = models.BooleanField(default=False)
	mode = models.CharField(max_length=1, choices=MODE)

	def __str__(self):
		return self.session_name


class blackSession(models.Model):
	colorid = models.CharField(primary_key=True, max_length=10, unique=True)
	session_name = models.CharField(max_length=200, unique=True)
	status = models.BooleanField(default=False)
	name = models.CharField(max_length = 50, null=True, blank=True)
	timer = models.IntegerField(default=7)
	post_time = models.DateTimeField(null=True)

	def __str__(self):
		return self.session_name

class whiteSession(models.Model):
	colorid = models.CharField(primary_key=True, max_length=10, unique=True)
	session_name = models.CharField(max_length=200, unique=True)
	status = models.BooleanField(default=False)
	name = models.CharField(max_length = 50, null=True, blank=True)
	timer = models.IntegerField(default=7)
	post_time = models.DateTimeField(null=True)

	def __str__(self):
		return self.session_name

class Black(models.Model):
	room = models.ForeignKey(blackSession, related_name='black_room', on_delete=models.CASCADE, null=True, blank=True)
	s1 = models.CharField(max_length = 10)
	s2 = models.CharField(max_length = 10, blank=True, null=True)
	get_time = models.DateTimeField(null=True)
	post_time = models.DateTimeField(auto_now_add=True, blank=True)

class White(models.Model):
	room = models.ForeignKey(whiteSession, related_name='white_room', on_delete=models.CASCADE, null=True, blank=True)
	s1 = models.CharField(max_length = 10)
	s2 = models.CharField(max_length = 10)
	get_time = models.DateTimeField(null=True)
	post_time = models.DateTimeField(auto_now_add=True, blank=True)

class ResultOmok(models.Model):
	room = models.CharField(max_length=10)
	color = models.CharField(max_length=10)
	x = models.CharField(max_length = 10, null=True)
	y = models.IntegerField(null=True)

	def __str__(self):
		return self.color

# Create your models here.
