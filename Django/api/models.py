from __future__ import unicode_literals
from django.db import models

class Session(models.Model):
	session_name = models.CharField(max_length=200, unique=True)
	color = models.CharField(max_length = 10, null=True, blank=True)
	manager_id = models.CharField(max_length=50, null=True, blank=True)
	status = models.BooleanField(default=False)

	def __str__(self):
		return self.session_name

class Stone(models.Model):
	room = models.ForeignKey(Session, related_name='stone_session', on_delete=models.CASCADE, null=True, blank=True)
	color = models.CharField(max_length = 10, default="white")
	x1 = models.CharField(max_length = 10)
	y1 = models.IntegerField()
	x2 = models.CharField(max_length = 10, blank=True, null=True)
	y2 = models.IntegerField(blank=True, null=True)

	def __str__(self):
		return self.color

class ResultOmok(models.Model):
	room = models.IntegerField()
	color = models.CharField(max_length=10)
	x = models.CharField(max_length = 10, null=True)
	y = models.IntegerField(null=True)

	def __str__(self):
		return self.color

# Create your models here.
