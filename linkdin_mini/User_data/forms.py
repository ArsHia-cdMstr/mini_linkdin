# forms.py in your app

from django import forms
from django.contrib.auth.forms import UserCreationForm
from .models import CustomUser

class CustomUserCreationForm(UserCreationForm):
    fullName = forms.CharField(label='Full Name', max_length=128)
    age = forms.IntegerField(label='Age')
    bio = forms.CharField(label='Bio', max_length=256, widget=forms.Textarea(attrs={'rows': 3, 'cols': 50}))
    birthDate = forms.DateField(label='Birth Date', widget=forms.DateInput(attrs={'type': 'date'}))
    gender = forms.ChoiceField(label='Gender', choices=CustomUser.GENDER_CHOICES)

    class Meta(UserCreationForm.Meta):
        model = CustomUser
        fields = ('username', 'fullName', 'age', 'bio', 'birthDate', 'gender', 'password1', 'password2')

    def save(self, commit=True):
        user = super().save(commit=False)
        user.fullName = self.cleaned_data['fullName']
        user.age = self.cleaned_data['age']
        user.bio = self.cleaned_data['bio']
        user.birthDate = self.cleaned_data['birthDate']
        user.gender = self.cleaned_data['gender']
        if commit:
            user.save()
        return user
