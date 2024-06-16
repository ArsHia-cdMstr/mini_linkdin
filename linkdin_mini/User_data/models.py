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


class Skill(models.Model):
    title = models.CharField(max_length=128)
    isArchived = models.BooleanField()
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name='skills', null=True, blank=True)

class EducationalRecord(models.Model):
    title = models.CharField(max_length=128)
    fromDate = models.DateField()
    toDate = models.DateField()
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)

class Education(models.Model):
    name = models.CharField(max_length=256)
    address = models.CharField(max_length=256)
    phoneNumber = models.CharField(max_length=20)
    EducationalRecord = models.ForeignKey('EducationalRecord', on_delete=models.CASCADE)


class WorkExperience(models.Model):
    title = models.CharField(max_length=128)
    fromDate = models.DateField()
    toDate = models.DateField()
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)

class Workplace(models.Model):
    name = models.CharField(max_length=256)
    address = models.CharField(max_length=256)
    phoneNumber = models.CharField(max_length=20)
    expertiseType = models.CharField(max_length=64)
    WorkExperience = models.ForeignKey('WorkExperience', on_delete=models.CASCADE)

class Storage(models.Model):
    file = models.FileField(upload_to='uploads/')
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)

class AcademicAchievement(models.Model):
    title = models.CharField(max_length=128)
    TYPE_CHOICES = [
        ('olympiad', 'Olympiad'),
        ('competition', 'Competition'),
        ('top-rating', 'Top Rating'),
    ]
    type = models.CharField(max_length=12, choices=TYPE_CHOICES)
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)

class EditRequest(models.Model):
    fullName = models.CharField(max_length=128)
    age = models.IntegerField()
    bio = models.CharField(max_length=256)
    birthDate = models.DateField()
    GENDER_CHOICES = [
        ('male', 'Male'),
        ('female', 'Female'),
    ]
    gender = models.CharField(max_length=6, choices=GENDER_CHOICES)
    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE)
