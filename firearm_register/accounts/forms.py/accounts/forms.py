from django import forms
from django.contrib.auth.forms import UserCreationForm
from .models import CustomUser

class CustomUserCreationForm(UserCreationForm):
    class Meta:
        model = CustomUser
        fields = ('email', 'first_name', 'last_name', 'id_number', 'company_name', 'address', 'tel_no', 'firearm_licence_no', 'password1', 'password2')