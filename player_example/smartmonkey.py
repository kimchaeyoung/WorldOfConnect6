import random, requests
from string import ascii_uppercase

def duplicate_check(data, x, y):
    x_list = list(ascii_uppercase[:-7])

    for i in data:
        if i['x'] == x and i['y'] == y:
            x = random.choice(x_list)
            y = str(random.randrange(1,20))
            (x, y) = duplicate_check (data, x, y)    

    return (x, y)

def first_stone(request, room_id, player_id):
    x = random.choice(ascii_uppercase[4:-12]) #EFGHIJKLMN
    y = str(random.randrange(4,14))

    url = request.build_absolute_uri('/')[:-1]+"/api/sessions/"+room_id+"/stones/?colorid="+player_id
    get_data = requests.get(url).json()
    (x , y) = duplicate_check(get_data, x, y)    
 
    s1 = x + y
     
    data = { 'room': player_id, 's1': s1, 's2': '' }
    url = request.build_absolute_uri('/')[:-1]+"/api/black-session/"+str(player_id)+"/blacks/"
    requests.post(url, data=data)

def second_stone(request, room_id, player_id, color):
    player_color = "blacks"
    if color == "black":
        player_color = "whites"
    url = request.build_absolute_uri('/')[:-1]+"/api/"
    getUrl = url + "sessions/"+ room_id + "/stones/?colorid="+player_id
    monkeyUrl = url + color + "-session/" + str(player_id) + "/" + color + "s/"
    get_data = requests.get(getUrl).json()
   
    length = len(get_data)
    if(length == 9):
        x1 = chr(ord(get_data[-2]['x'])+1)
        y1 = get_data[-2]['y']
        x2 = x1
        y2 = y1 +1 
    elif color == "black" and length<=11 :
        x1 = chr(ord(get_data[-2]['x'])+1)
        y1 = get_data[-2]['y']
        x2 = x1
        y2 = y1 +1 
       
    else:
        last_x1 = get_data[-1]['x']
        last_x2 = get_data[-2]['x']
        prelast_x1 = get_data[-5]['x']
        prelast_x2 = get_data[-6]['x']

        last_y1 = get_data[-1]['y']
        last_y2 = get_data[-2]['y']
        prelast_y1 = get_data[-5]['y']
        prelast_y2 = get_data[-6]['y']

        x_data = [last_x1, last_x2, prelast_x1, prelast_x2]
        y_data = [last_y1, last_y2, prelast_y1, prelast_y2]
        cntx = 0
        cnty = 0
        if 0 in y_data:
            cntx = 0
            cnty = 0
        else: 
            standard_x = min(x_data)
            if chr(ord(standard_x) + 1) in x_data:
                cntx += 1
            if chr(ord(standard_x) + 2) in x_data:
                cntx += 1
            if chr(ord(standard_x) + 3) in x_data:
                cntx += 1
            if chr(ord(standard_x) + 4) in x_data:
                cntx +=1

            if cntx >= 3:
                x1 = chr(ord(standard_x)-1)
                x2 = chr(ord(max(x_data))+1)
                y1 = get_data[-1]['y']
                y2 = y1

            standard_y = min(y_data)
            if standard_y + 1 in y_data:
                cnty += 1
            if standard_y + 2 in y_data:
                cnty += 1
            if standard_y + 3 in y_data:
                cnty += 1
            if standard_y + 4 in y_data:
                cnty += 1
      
            if cnty >= 3:
                last_x1 = get_data[-1]['x']
                x1 = last_x1
                x2 = x1
                y1 = standard_y-1
                y2 = max(y_data)+1  
            
         
        if cntx < 3 and cnty < 3:
            x1 = get_data[-3]['x']
            x2 = x1
            get_y = max(get_data[-3]['y'], get_data[-4]['y'])
            y1 = get_y + 1
            y2 = y1 + 1

    x_list = list(ascii_uppercase[:-7]) 
    if x1 not in x_list:
        x1 = random.choice(x_list)
    if x2 not in x_list:
        x2 = random.choice(x_list)
    if y1 > 19 :        
        y1 = random.randrange(1,20)
    if y2 > 19:
        y2 = random.randrange(1,20)

 
    (x1, y1) = duplicate_check(get_data, x1, y1)
    if x1 == x2 and y1 == y2 :
        y2 = random.randrange(1,20)
    (x2, y2) = duplicate_check(get_data, x2, y2)

    s1 = x1 + str(y1)
    s2 = x2 + str(y2)
    data = { 'room': player_id, 's1': s1, 's2': s2 }
    requests.post(monkeyUrl,data=data)
           
  
  
      

