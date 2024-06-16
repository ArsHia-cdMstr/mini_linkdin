from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth import authenticate, login, logout
from . import forms
from .forms import CustomUserCreationForm
from .models import CustomUser


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


def profile(request, username):
    user = get_object_or_404(CustomUser, username=username)  # گرفتن کاربر با نام کاربری
    context = {
        'user': user
    }
    return render(request, 'profile.html', context)