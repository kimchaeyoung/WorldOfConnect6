from django.db.models.signals import post_save, pre_save
from django.dispatch import receiver
from .models import *
from .serializers import *
import requests, time, random

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


@receiver(post_save, sender = Stone)
def stone_post_save(sender, **kwargs):
            tmp = Stone.objects.last()
            resultRoom = Session.objects.get(session_name=tmp.room).id
            resultColor = str(tmp.color)
            resultX1 = str(tmp.x1)
            resultY1 = tmp.y1
            resultX2 = str(tmp.x2)
            resultY2 = tmp.y2

            resultOmok = ResultOmok(room=resultRoom, color = resultColor, x = resultX1 , y = resultY1)
            resultOmok.save()

            resultOmok = ResultOmok(room=resultRoom, color = resultColor, x = resultX2 , y = resultY2)
            resultOmok.save()

            status = Session.objects.get(id=resultRoom).status
            clientColor = Session.objects.get(id=resultRoom).color
            if(status is not False):
           
                if(clientColor is not None):            
                  if(str(Stone.objects.last().color) == clientColor):
                    if(clientColor == "white"):
                        mColor = "black"
                    else:
                        mColor = "white"

                    time.sleep(2)
                    x1 = random.choice('ABCDEFGHIJKLMNOPQRS')
                    x2 = random.choice('ABCDEFGHIJKLMNOPQRS')

                    y1 = random.randrange(1,20)
                    y2 = random.randrange(1,20)

                    data = {'room':resultRoom, 'color': mColor , 'x1': x1, 'y1': y1, 'x2': x2, 'y2' : y2}
                    requests.post('http://turnincode.cafe24.com:8880/api/sessions/'+str(resultRoom)+'/stones/', data=data)
            else:
                print("session finish.")
