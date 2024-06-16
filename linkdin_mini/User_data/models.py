from django.contrib.auth.models import AbstractUser
from django.db import models

class CustomUser(AbstractUser):
    fullName = models.CharField(max_length=128, blank=True, null=True)
    age = models.IntegerField( blank=True, null=True)
    bio = models.CharField(max_length=256, blank=True, null=True)
    birthDate = models.DateField( blank=True, null=True)
    GENDER_CHOICES = [
        ('male', 'Male'),
        ('female', 'Female'),
    ]
    gender = models.CharField(max_length=6, choices=GENDER_CHOICES, blank=True, null=True)
    profile_image = models.ImageField(upload_to='profile_images/', blank=True, null=True)
    profile_header_image = models.ImageField(upload_to='profile_headers/', blank=True, null=True)