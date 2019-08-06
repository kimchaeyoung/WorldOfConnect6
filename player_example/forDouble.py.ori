import requests, time, sys

text_len = 0

def getUrl(text, session):
    url = 'http://turnincode.cafe24.com:'+sys.argv[1]+'/api/sessions/'+session+'/stones/'
    res = requests.get(url)
    if res.status_code == 404:
        time.sleep(1)
        getUrl(session)
    if (text == len(res.text)):
        time.sleep(1)
        getUrl(session)
    else:
        text_len = len(res.text)


black = [["I",9],["H",9,"J",9],["F",8,"K",8],["I",10,"H",11],["K",7,"K",6],["K",9,"K",10]]
white = [["I",8,"H",8],["G",8,"J",8],["F",9,"H",7],["G",12,"L",7],["I",6,"E",10],["D",11,"K",11]]

requests.get('http://turnincode.cafe24.com:'+sys.argv[1]+'/api/sessions/'+sys.argv[2]+'/whites/')
time.sleep(1)
requests.get('http://turnincode.cafe24.com:'+sys.argv[1]+'/api/sessions/'+sys.argv[2]+'/blacks/')


for i in range(6):
    if i == 0:
        data = {'room': sys.argv[2] , 'x1' : black[0][0], 'y1' : black[0][1], 'x2' : '', 'y2' : 0}
    else:
        data = {'room': sys.argv[2] , 'x1' : black[i][0], 'y1' : black[i][1], 'x2' : black[i][2], 'y2' : black[i][3]}

    time.sleep(1)
    res = requests.post('http://turnincode.cafe24.com:'+sys.argv[1]+'/api/sessions/'+sys.argv[2]+'/blacks/', data=data)
    getUrl(text_len, sys.argv[2])   ##white get

    data = {'room': sys.argv[2] , 'x1' : white[i][0], 'y1' : white[i][1], 'x2' : white[i][2], 'y2' : white[i][3]}
    time.sleep(1)
    res = requests.post('http://turnincode.cafe24.com:'+sys.argv[1]+'/api/sessions/'+sys.argv[2]+'/whites/', data=data)
    getUrl(text_len, sys.argv[2])   ##white get##
