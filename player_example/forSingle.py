import requests, sys, time

url = 'http://turnincode.cafe24.com:'+sys.argv[1]+'/api/sessions/'+sys.argv[2]+'/stones/'

if sys.argv[3] == 'b':
  requests.get(url)
  url2 = 'http://turnincode.cafe24.com:'+sys.argv[1]+'/api/sessions/'+sys.argv[2]+'/blacks/' 
  data = {'room': sys.argv[2] , 'x1' : 'D', 'y1' : 10, 'x2' : '', 'y2' : 0}
  requests.post(url2, data=data)
  time.sleep(1)
  requests.get(url)
  data = {'room': sys.argv[2] , 'x1' : 'E', 'y1' : 10, 'x2' : 'E', 'y2' : 11 }
  requests.post(url2, data=data)
  time.sleep(2)
  requests.get(url)
  data = {'room': sys.argv[2] , 'x1' : 'F', 'y1' : 13, 'x2' : 'F', 'y2' : 16 }
  requests.post(url2,data=data)
  time.sleep(1)
  requests.get(url)
  data = {'room': sys.argv[2] , 'x1' : 'E', 'y1' : 12, 'x2' : 'E', 'y2' : 13 }
  requests.post(url2, data=data)
  time.sleep(2)
  requests.get(url)
  data = {'room': sys.argv[2] , 'x1' : 'J', 'y1' : 15, 'x2' : 'J', 'y2' : 16 }
  requests.post(url2, data=data)
  time.sleep(1)
  requests.get(url)
  data = {'room': sys.argv[2] , 'x1' : 'E', 'y1' : 14, 'x2' : 'E', 'y2' : 15 }
  requests.post(url2, data=data)
  time.sleep(2)
  requests.get(url)


if sys.argv[3] == 'w':
  requests.get(url)
  url2 = 'http://turnincode.cafe24.com:'+sys.argv[1]+'/api/sessions/'+sys.argv[2]+'/whites/'  
  data = {'room': sys.argv[2] , 'x1' : 'D', 'y1' : 10, 'x2' : '', 'y2' : 0}
  requests.post(url2, data=data)
  time.sleep(2)
  requests.get(url)
  data = {'room': sys.argv[2] , 'x1' : 'E', 'y1' : 10, 'x2' : 'E', 'y2' : 11 }
  requests.post(url2, data=data)
  time.sleep(2)
  requests.get(url)
  data = {'room': sys.argv[2] , 'x1' : 'F', 'y1' : 13, 'x2' : 'F', 'y2' : 16 }
  requests.post(url2,data=data)
  time.sleep(2)
  requests.get(url)
  data = {'room': sys.argv[2], 'x1' : 'E', 'y1' : 12, 'x2' : 'E', 'y2' : 13 }
  requests.post(url2, data=data)
  time.sleep(2)
  requests.get(url)
  data = {'room': sys.argv[2] , 'x1' : 'J', 'y1' : 15, 'x2' : 'J', 'y2' : 16 }
  requests.post(url2, data=data)
  time.sleep(2)
  requests.get(url)
  data = {'room': sys.argv[2] , 'x1' : 'E', 'y1' : 14, 'x2' : 'E', 'y2' : 15 }
  requests.post(url2, data=data)
  time.sleep(2)
  requests.get(url)

