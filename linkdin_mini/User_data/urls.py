from django.urls import path
from . import views

urlpatterns = [

    path("", views.home, name="Home"),
    path("signup", views.signup, name="signup-form"),
    path("profile", views.profile, name="user profile"),

]