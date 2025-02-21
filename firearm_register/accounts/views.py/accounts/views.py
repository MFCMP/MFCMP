from django.shortcuts import render, redirect
from django.contrib.auth import login, authenticate
from django.core.mail import send_mail
from .forms import CustomUserCreationForm
from .models import CustomUser

def register_view(request):
    if request.method == 'POST':
        form = CustomUserCreationForm(request.POST)
        if form.is_valid():
            user = form.save()
            send_mail(
                'New User Registration',
                f'New user registered: {user.email}',
                'your-email@gmail.com',
                ['admin@mfcmp.co.za'],
                fail_silently=False,
            )
            login(request, user)
            return redirect('/')
    else:
        form = CustomUserCreationForm()
    return render(request, 'register.html', {'form': form})

def forgot_password_view(request):
    if request.method == 'POST':
        email = request.POST['email']
        try:
            user = CustomUser.objects.get(email=email)
            send_mail(
                'Forgot Password/Username',
                f'User forgot credentials: {email}',
                'your-email@gmail.com',
                ['admin@mfcmp.co.za'],
                fail_silently=False,
            )
            return redirect('/login')
        except CustomUser.DoesNotExist:
            pass
    return render(request, 'forgot_password.html')