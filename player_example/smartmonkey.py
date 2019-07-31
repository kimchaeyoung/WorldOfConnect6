import random, requests
from string import ascii_uppercase

def first_stone(request, room_id):
    x = random.choice(ascii_uppercase[4:-12]) #EFGHIJKLMN
    y = random.randrange(4,14)
    
    data = { 'room': room_id, 'x1': x, 'y1': y, 'x2': '', 'y2': 0 }
    url = request.build_absolute_uri('/')[:-1]+"/api/sessions/"+str(room_id)+"/blacks/"
    requests.post(url, data=data)
#    requests.post(url, data=data, auth=("admin","12341234"))

def second_stone(request, room_id, color):
    player_color = "blacks"
    if color == "black":
        player_color = "whites"
    url = request.build_absolute_uri('/')[:-1]+"/api/sessions/"+str(room_id)
    player_url = url + "/" + player_color + "/"
    monkey_url = url + "/" + color + "s/" 
    player_data = requests.get(player_url).json()
    monkey_data  = requests.get(monkey_url).json()
   
    length = len(player_data)
    if(length == 1):
        x1 = chr(ord(player_data[0]['x1'])+1)
        y1 = player_data[0]['y1']
        x2 = x1
        y2 = y1 +1       
    else:
        
        last_x1 = player_data[-1]['x1']
        last_x2 = player_data[-1]['x2']
        prelast_x1 = player_data[-2]['x1']
        prelast_x2 = player_data[-2]['x2']

        last_y1 = player_data[-1]['y1']
        last_y2 = player_data[-1]['y2']
        prelast_y1 = player_data[-2]['y1']
        prelast_y2 = player_data[-2]['y2']

        x_data = [last_x1, last_x2, prelast_x1, prelast_x2]
        y_data = [last_y1, last_y2, prelast_y1, prelast_y2]
        cntx = 0
        cnty = 0
        if None in y_data:
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
                y1 = player_data[-1]['y1']
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
                last_x1 = player_data[-1]['x1']
                x1 = last_x1
                x2 = x1
                y1 = standard_y-1
                y2 = max(y_data)+1  
            
         
        if cntx < 3 and cnty < 3:
            x1 = monkey_data[-1]['x2']
            x2 = x1
            monkey_y = max(monkey_data[-1]['y1'], monkey_data[-1]['y2'])
            y1 = monkey_y + 1
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

 
        for i in player_data:
            if i['x1'] == x1 and i['y1'] == y1:
               x1 = random.choice(x_list)
               y1 = random.randrange(1,20)
            if i['x2'] == x2 and i['y2'] == y2:
               x2 = random.choice(x_list)
               y2 = random.randrand(1,20)

        for i in monkey_data:
            if i['x1'] == x1 and i['y1'] == y1:
               x1 = random.choice(x_list)
               y1 = random.randrange(1,20)
            if i['x2'] == x2 and i['y2'] == y2:
               x2 = random.choice(x_list)
               y2 = random.randrand(1,20)
        
        
    data = { 'room': room_id, 'x1': x1, 'y1': y1, 'x2': x2, 'y2': y2 }
    requests.post(monkey_url,data=data)
           
  
  
      

