'''
   sys.argv[0] : port
   sys.argv[1] : session_id 
   sys.argv[2] : black_id
   sys.argv[3] : white_id
'''

import sys, requests, random, time
from string import ascii_uppercase

port = sys.argv[1] 
session_id = sys.argv[2]
black_id = sys.argv[3]
white_id = sys.argv[4]

url = 'http://turnincode.cafe24.com:' + port + '/api/'

session_url = url + 'sessions/' + session_id + '/'
black_post = url + 'black-session/' + black_id + '/blacks/'
white_post = url + 'white-session/' + white_id + '/whites/'
black_get = url + 'sessions/' + session_id + "/stones/?colorid=" + black_id
white_get = url + 'sessions/' + session_id + "/stones/?colorid=" + white_id
def duplicate_check(Data, s1, s2):
    for i in Data:
        if i['x'] == s1[0] and i['y'] == s1[1:]:
            x = random.choice(ascii_uppercase[4:-12])
            y = str(random.randrange(4,14))
            s1 = x + y
        if s2 is not None:
            if i['x'] == s2[0] and i['y'] == s2[1:]:
                x = random.choice(ascii_uppercase[4:-12])
                y = str(random.randrange(4,14))
                s2 = x + y
    return ( s1, s2 )

def random_stone():
    x = random.choice(ascii_uppercase[2:-14])
    y = str(random.randrange(2,15))
    return x+y

requests.get(black_get)
time.sleep(1)
requests.get(white_get)

x = random.choice(ascii_uppercase[4:-12])
y = str(random.randrange(4,14))
s1 = x + y

(s1, s2) = duplicate_check(requests.get(black_get).json() , s1, None)
data = { 'room' : black_id , 's1' : s1 , 's2' : '' }
requests.post(black_post, data=data)


for i in range(20):
    time.sleep(1)
    requests.get(white_get)
    s1 = random_stone()
    s2 = s1[0] + str(int(s1[1:])+1)
#    (s1, s2) = duplicate_check( requests.get(white_get).json(), s1, s2 )
    data = { 'room' : white_id, 's1' : s1 , 's2' : s2 }
    requests.post(white_post, data=data)

    time.sleep(1)
    requests.get(black_get)
    s1 = random_stone()
    s2 = s1[0] + str(int(s1[1:])+1)
#    (s1, s2) = duplicate_check( requests.get(black_get).json(), s1, s2 )
    data = { 'room' : black_id, 's1' : s1 , 's2' : s2 }
    requests.post(black_post, data=data)
 




     
  























