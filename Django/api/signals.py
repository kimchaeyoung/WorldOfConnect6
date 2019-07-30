from django.db.models.signals import post_save, pre_save
from django.dispatch import receiver
from .models import *
from .serializers import *
import requests, time, random

'''
@receiver(pre_save, sender = Stone)
def stone_pre_save(sender, instance, **kwargs):
    if instance.x1 == instance.x2 and instance.y1 == instance.y2:
        raise Exception('Duplication')
    if Stone.objects.filter(room=instance.room, x1=instance.x1, y1=instance.y1).exists():
        raise Exception('Duplication!')
    if Stone.objects.filter(room=instance.room, x2=instance.x1, y2=instance.y1).exists():
        raise Exception('Duplication!')
    if Stone.objects.filter(room=instance.room, x1=instance.x2, y1=instance.y2).exists():
        raise Exception('Duplication!')
    if Stone.objects.filter(room=instance.room, x2=instance.x2, y2=instance.y2).exists():
        raise Exception('Duplication!')
'''

@receiver(pre_save, sender=ResultOmok)
def stone_pre_save(sender, instance, **kwargs):
    if ResultOmok.objects.filter(room=instance.room, x=instance.x, y=instance.y).exists():
        raise Exception('Duplication') 
