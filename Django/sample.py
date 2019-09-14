import requests, random, time
from string import ascii_uppercase

def gamestart(roomcode, playercode):
 
    getURL = 'http://turnincode.cafe24.com:8880/api/sessions/' + roomcode + '/get/'
    params = {'playerid' : playercode}
    requests.get(getURL, params=params)

def placestone(playercode, s1, s2='' ):

    if playercode[-1] is 'b':
        postURL = 'http://turnincode.cafe24.com:8880/api/black-session/' + playercode + '/p1_post/'
    else:
        postURL = 'http://turnincode.cafe24.com:8880/api/white-session/' + playercode + '/p2_post/'

    data = { 'room' : playercode, 's1' : s1, 's2' : s2 }
    print("place", s1)
    requests.post(postURL, data=data)

def getstatus(roomcode, playercode):
  
    getURL = 'http://turnincode.cafe24.com:8880/api/sessions/' + roomcode + '/get/'
    params = {'playerid' : playercode}
    get_data = requests.get(getURL, params=params).json()
    
    stone = []
    status = {}
    black = []
    white = [] 

    for i in ascii_uppercase[:-7] :
        for j in range(1,20):
            stone.append(i+str(j))

    for s in stone:
        status.setdefault(s,'empty')
        
    for get in get_data:
        data = get['x'] + str(get['y']) 
        if get['color'] == 'black':
            black.append(data)
        if get['color'] == 'white':
            white.append(data) 
        status.update({data : get['color']})

    turn = get_data[-1]['color']
    if turn == 'black':
        turn = 'white'
    elif turn == 'white':
        turn = 'black'
    else:
        turn = 'Notready'

    status.update({'black' : black , 'white': white, 'turn' : turn})

    return status

def sample(roomcode, playercode):

    gamestart(roomcode, playercode)
    if playercode[-1] is 'b':
        color = "black"
    else:
        color = "white"

    while True:
        status = getstatus(roomcode, playercode)
        turn = status['turn']

        if color == "black":
          if turn == "Notready":
            x1 = random.choice(ascii_uppercase[:-7])
            y1 = random.randrange(1,20)
            s1 = x1 + str(y1)
            placestone(playercode, s1)
          if turn == "white":
            continue
          if color == turn:
            x1 = random.choice(ascii_uppercase[:-7])
            x2 = random.choice(ascii_uppercase[:-7])
            y1 = random.randrange(1,20)
            y2 = random.randrange(1,20)    

            s1 = x1 + str(y1)
            s2 = x2 + str(y2)
            placestone(playercode, s1, s2)

        if color == "white":
          if turn == "black":
              continue
          if color == turn:
            x1 = random.choice(ascii_uppercase[:-7])
            x2 = random.choice(ascii_uppercase[:-7])
            y1 = random.randrange(1,20)
            y2 = random.randrange(1,20)    

            s1 = x1 + str(y1)
            s2 = x2 + str(y2)
            placestone(playercode, s1, s2)


    





