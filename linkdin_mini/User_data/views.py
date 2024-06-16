from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from . import forms
from .forms import CustomUserCreationForm

def home(request):
    return render(request, 'home.html')

def signup(request):
    if request.method == 'POST':
        form = CustomUserCreationForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)
            return redirect('Home')  # Redirect to home or any other page
    else:
        form = CustomUserCreationForm()
    return render(request, 'signup.html', {'form': form})


def profile(request):
    return render(request, 'home.html')