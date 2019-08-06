import requests

def getUrl(url):
    data = requests.get(url).json()
    value_list = []

    for i in data:
        value = { 'x' : i['x'], 'y' : i['y'], 'color' : i['color'] }
        value_list.append(value)
   
    return value_list

def postUrl(url, data):
    requests.post(url, data)
