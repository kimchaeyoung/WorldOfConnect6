import random, requests
from string import ascii_uppercase

def first_stone(request, room_id):
    x = random.choice(ascii_uppercase[:-7])
    y = random.randrange(1,20)
    
    data = { 'room': room_id, 'color': "black", 'x1': x, 'y1': y, 'x2': '', 'y2': 0 }
    url = request.build_absolute_uri('/')[:-1]+"/api/sessions/"+str(room_id)+"/stones/"
    requests.post(url, data=data)

def second_stone(request, room_id, color):
    x1 = random.choice(ascii_uppercase[:-7])
    x2 = random.choice(ascii_uppercase[:-7])

    y1 = random.randrange(1,20)
    y2 = random.randrange(1,20)

    data = { 'room': room_id, 'x1': x1, 'y1': y1, 'x2': x2, 'y2': y2 }
    url = request.build_absolute_uri('/')[:-1]+"/api/sessions/"+str(room_id)+"/" + str(color)+"s/"
    requests.post(url, data=data)

  
  
      

