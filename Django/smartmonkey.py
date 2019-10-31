import random, requests, time
from string import ascii_uppercase

def duplicate_check(data, x, y):
    check=False
    x_list = list(ascii_uppercase[:-7])
    print("dupppppppplicateeeeeeeeeeeeeee!!!!!!")
    for i in data:
        if i['x'] == x and i['y'] == y:
            check=True
            break;
    if check == True:
        x = random.choice(x_list)
        y = random.randrange(1,20)
        (x, y) = duplicate_check(data, x, y)

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
    
      player_x = []
      player_y = []
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
            player_x.append(get_data[-1]['x'])
            player_x.append(get_data[-2]['x'])
            player_y.append(get_data[-1]['y']) 
            player_y.append(get_data[-2]['y'])   

            if get_data[-4]['color'] == 'red':
                x1 = chr(ord(get_data[-1]['x'])+1)
                y1 = get_data[-2]['y']
                x2 = x1
                y2 = y1 + 1
            else:
                player_x.append(get_data[-5]['x'])
                player_x.append(get_data[-6]['x'])
                player_y.append(get_data[-5]['y']) 
                player_y.append(get_data[-6]['y'])   

                cntx = 0
                cnty = 0

                standard_x = min(player_x)
                standard_y = min(player_y)

                if chr(ord(standard_x)+1) in player_x:
                    cntx += 1
                if chr(ord(standard_x)+2) in player_x:
                    cntx += 1
                if chr(ord(standard_x)+3) in player_x:
                    cntx += 1

                if standard_y + 1 in player_y:
                    cnty += 1
                if standard_y + 2 in player_y:
                    cnty += 1
                if standard_y + 3 in player_y:
                    cnty += 1

                x1 = chr(ord(get_data[-1]['x'])+1)
                y1 = get_data[-2]['y']
                x2 = x1
                y2 = y1 + 1
 
                if cntx == 3 and cnty == 3: #대각선
                    x1 = chr(ord(standard_x)-1)
                    y1 = standard_y - 1
                    x2 = chr(ord(max(player_x))+1)
                    y2 = max(player_y)+1
                if cntx == 3 and cnty == 0:
                    x1 = chr(ord(standard_x)-1)
                    y1 = standard_y
                    x2 = chr(ord(max(player_x))+1)
                    y2 = standard_y
                if cntx == 0 and cnty == 3:
                    x1 = standard_x
                    y1 = standard_y - 1
                    x2 = standard_x
                    y2 = max(player_y) + 1

            x_list = list(ascii_uppercase[:-7])
            if x1 not in x_list:
                x1 = random.choice(x_list) 
            if x2 not in x_list:
                x2 = random.choice(x_list)
            if y1 > 19 or y1 < 1:
                y1 = random.randrange(1,20)
            if y2 > 19 or y2 < 1:
                y2 = random.randrange(1,20)

            (x1, y1) = duplicate_check(get_data, x1, y1)
            if x1 == x2 and y1 == y2:
                y2 = random.randrange(1,20)
            (x2, y2) = duplicate_check(get_data, x2, y2)

            s1 = x1 + str(y1)
            s2 = x2 + str(y2)
            data = { 'room' : player_id , 's1' : s1, 's2' : s2 }    
            requests.post(postURL, data=data)


      if color == "white":
        if color == get_color:
            continue
        if get_color == "black":
            player_x.append(get_data[-1]['x'])
            player_x.append(get_data[-2]['x'])
            player_y.append(get_data[-1]['y']) 
            player_y.append(get_data[-2]['y'])   

            if get_data[-2]['color'] == 'red' or get_data[-6]['color'] == 'red':
                x1 = chr(ord(get_data[-1]['x'])+1)
                y1 = get_data[-1]['y']
                x2 = x1
                y2 = y1 + 1
            else:
                player_x.append(get_data[-5]['x'])
                player_x.append(get_data[-6]['x'])
                player_y.append(get_data[-5]['y']) 
                player_y.append(get_data[-6]['y'])   

                cntx = 0
                cnty = 0

                standard_x = min(player_x)
                standard_y = min(player_y)

                if chr(ord(standard_x)+1) in player_x:
                    cntx += 1
                if chr(ord(standard_x)+2) in player_x:
                    cntx += 1
                if chr(ord(standard_x)+3) in player_x:
                    cntx += 1

                if standard_y + 1 in player_y:
                    cnty += 1
                if standard_y + 2 in player_y:
                    cnty += 1
                if standard_y + 3 in player_y:
                    cnty += 1

                x1 = chr(ord(get_data[-1]['x'])+1)
                y1 = get_data[-2]['y']
                x2 = x1
                y2 = y1 + 1
 
                if cntx == 3 and cnty == 3: #대각선
                    x1 = chr(ord(standard_x)-1)
                    y1 = standard_y - 1
                    x2 = chr(ord(max(player_x))+1)
                    y2 = max(player_y)+1
                if cntx == 3 and cnty == 0:
                    x1 = chr(ord(standard_x)-1)
                    y1 = standard_y
                    x2 = chr(ord(max(player_x))+1)
                    y2 = standard_y
                if cntx == 0 and cnty == 3:
                    x1 = standard_x
                    y1 = standard_y - 1
                    x2 = standard_x
                    y2 = max(player_y) + 1

            x_list = list(ascii_uppercase[:-7])
            if x1 not in x_list:
                x1 = random.choice(x_list) 
            if x2 not in x_list:
                x2 = random.choice(x_list)
            if y1 > 19 or y1 < 1:
                y1 = random.randrange(1,20)
            if y2 > 19 or y2 < 1:
                y2 = random.randrange(1,20)

            (x1, y1) = duplicate_check(get_data, x1, y1)
            if x1 == x2 and y1 == y2:
                y2 = random.randrange(1,20)
            (x2, y2) = duplicate_check(get_data, x2, y2)

            s1 = x1 + str(y1)
            s2 = x2 + str(y2)
            data = { 'room' : player_id , 's1' : s1, 's2' : s2 }    
            requests.post(postURL, data=data)
















                    

           
            


       





 


           

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



















             
        
            


