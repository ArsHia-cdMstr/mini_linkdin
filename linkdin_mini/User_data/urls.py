from django.urls import path
from . import views
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [

    path("", views.home, name="Home"),
    path("signup", views.signup, name="signup-form"),
    path("profile", views.profile, name="user profile"),

]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)