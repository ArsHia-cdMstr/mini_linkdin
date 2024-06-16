from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth import authenticate, login, logout
from django.urls import reverse
from . import forms
from .forms import CustomUserCreationForm
from .models import CustomUser
from django.contrib.auth.decorators import login_required

def home(request):
    return render(request, 'home.html')

def signup(request):
    if request.method == 'POST':
        form = CustomUserCreationForm(request.POST, request.FILES)
        if form.is_valid():
            user = form.save()
            login(request, user)
            return redirect('Home')  # Redirect to home or any other page
    else:
        form = CustomUserCreationForm()
    return render(request, 'signup.html', {'form': form})

@login_required 
def profile(request, username):
    user = get_object_or_404(CustomUser, username=username)  # گرفتن کاربر با نام کاربری
    context = {
        'user': user
    }
    return render(request, 'profile.html', context)

def user_login(request):
    if request.method == 'POST':
        form = forms.LoginForm(request.POST)
        if form.is_valid():
            username = form.cleaned_data['username']
            password = form.cleaned_data['password']
            user = authenticate(request, username=username, password=password)
            if user is not None:
                login(request, user)
                return redirect(reverse('user_profile', kwargs={'username': user.username}))  # Redirect to home page or any other page after successful login
            else:
                form.add_error(None, 'Invalid username or password')
    else:
        form = forms.LoginForm()
    return render(request, 'login.html', {'form': form})


def explore(request):
    users = CustomUser.objects.all()  # یا User.objects.all() اگر از مدل پیش‌فرض استفاده می‌کنید
    return render(request, 'explore.html', {'users': users})