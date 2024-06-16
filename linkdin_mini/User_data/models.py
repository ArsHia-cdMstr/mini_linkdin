from django.contrib.auth.models import AbstractUser
from django.db import models

class CustomUser(AbstractUser):
    fullName = models.CharField(max_length=128)
    age = models.IntegerField()
    bio = models.CharField(max_length=256)
    birthDate = models.DateField()
    GENDER_CHOICES = [
        ('male', 'Male'),
        ('female', 'Female'),
    ]
    gender = models.CharField(max_length=6, choices=GENDER_CHOICES)
    profile_image = models.ImageField(upload_to='profile_images/', blank=True, null=True)
    profile_header_image = models.ImageField(upload_to='profile_headers/', blank=True, null=True)