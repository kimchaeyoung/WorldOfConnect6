import random, requests
from string import ascii_uppercase

def first_stone(request, room_id):
    x = random.choice(ascii_uppercase[:-7])
    y = random.randrange(1,20)
<<<<<<< HEAD:player_example/randommonkey.py
    
    data = { 'room': room_id, 'color': "black", 'x1': x, 'y1': y, 'x2': '', 'y2': 0 }
    url = request.build_absolute_uri('/')[:-1]+"/api/sessions/"+str(room_id)+"/blacks/"
=======
    s1 = x+str(y)
    data = { 'room': room_id,  's1': s1 }
    url = request.build_absolute_uri('/')[:-1]+"/api/black-session/"+str(room_id)+"/blacks/"
>>>>>>> 16617068f9955dfbdbf19c0dd6e4f9ea3d7cecad:player_example/monkey.py
    requests.post(url, data=data)

def second_stone(request, room_id, color):
    x1 = random.choice(ascii_uppercase[:-7])
    x2 = random.choice(ascii_uppercase[:-7])
    y1 = random.randrange(1,20)
    y2 = random.randrange(1,20)

<<<<<<< HEAD:player_example/randommonkey.py
    data = { 'room': room_id, 'x1': x1, 'y1': y1, 'x2': x2, 'y2': y2 }
    url = request.build_absolute_uri('/')[:-1]+"/api/sessions/"+str(room_id)+"/" + str(color)+"s/"
=======
    s1 = x1+str(y1)
    s2 = x2+str(y2)
    data = { 'room': room_id, 's1':s1, 's2':s2 }
    url = request.build_absolute_uri('/')[:-1]+"/api/"+str(color)+"-session/"+str(room_id)+"/" + str(color)+"s/"
>>>>>>> 16617068f9955dfbdbf19c0dd6e4f9ea3d7cecad:player_example/monkey.py
    requests.post(url,data=data)
