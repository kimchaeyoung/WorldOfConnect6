import random, requests
from string import ascii_uppercase

def random_stone(request,room_id):
    xy_data = []
    url = request.build_absolute_uri('/')[:-1]+"/api/sessions/"+room_id+"/get/"
    for i in range(7):
        if i < 4:
            x = random.choice(ascii_uppercase[4:-12])
            y = str(random.randrange(4,14))
        else:
            random_x = ['A','B','C','D','E','N','O','P','Q','R','S']
            random_y = [ 1, 2, 3, 4, 15, 16, 17, 18, 19]
            x = random.choice(random_x)
            y = str(random.choice(random_y))
 
        XY = x + y
        while True:
            if XY not in xy_data:
                xy_data.append(XY)               
                break
            x = random.choice(ascii_uppercase[4:-12])
            y = str(random.randrange(4,14))
            XY = x + y
        data = { 'room' : room_id, 'color': 'red', 'x': x, 'y': y} 
        
        requests.post(url, data=data)
        
 


