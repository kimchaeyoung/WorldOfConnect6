import random, requests, time
from string import ascii_uppercase

def duplicate_check(data, x, y):
    x_list = list(ascii_uppercase[:-7])
    print("dupppppppplicateeeeeeeeeeeeeee!!!!!!")
    for i in data:
        if i['x'] == x and i['y'] == y:
            x = random.choice(x_list)
            y = random.randrange(1,20)
            #(x, y) = duplicate_check(data, x, y)

    return (x, y)


def monkey_stone(request, room_id, player_id, color):

    if color == "black":
        post = "p1_post"
    if color == "white":
        post = "p2_post"

    url = request.build_absolute_uri('/')[:-1]+"/api/"
    getURL = url + "sessions/" + room_id + "/get/?playerid=" + player_id
    postURL = url + color + "-session/" + player_id + "/" + post + "/"

    while True:
      get_data = requests.get(getURL).json()
      get_color = get_data[-1]['color']

      if color == "black":
        if get_color == "red":
            x = random.choice(ascii_uppercase[4:-12])
            y = random.randrange(4,14)
            (x,y) = duplicate_check(get_data, x, y)
            s1 = x + str(y)
            data = {'room' : player_id, 's1': s1, 's2': '' }
            requests.post(postURL, data=data)
        if color == get_color:
            continue
        if get_color == "white":
            x = random.choice(ascii_uppercase[:-7])
            y = random.randrange(1,20)
            (x,y) = duplicate_check(get_data, x, y)
            s1 = x + str(y)
            x = random.choice(ascii_uppercase[:-7])
            y = random.randrange(1,20)
            (x,y) = duplicate_check(get_data, x, y)
            s2 = x + str(y)
            data = {'room' : player_id, 's1': s1, 's2': s2 }
            requests.post(postURL, data=data)

      if color == "white":
        if color == get_color:
            continue
        if get_color == "black":
            x = random.choice(ascii_uppercase[:-7])
            y = random.randrange(1,20)
            (x,y) = duplicate_check(get_data, x, y)
            s1 = x + str(y)
            x = random.choice(ascii_uppercase[:-7])
            y = random.randrange(1,20)
            (x,y) = duplicate_check(get_data, x, y)
            s2 = x + str(y)
            data = {'room' : player_id, 's1': s1, 's2': s2 }
            requests.post(postURL, data=data)



















             
        
            


