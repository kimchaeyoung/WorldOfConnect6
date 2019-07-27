from django import forms

class double_form(forms.Form):
    room_name = forms.CharField(max_length=50)
    player1_name = forms.CharField(max_length=50)
    player2_name = forms.CharField(max_length=50)

class single_form(forms.Form):
    player_name = forms.CharField(max_length=50)
