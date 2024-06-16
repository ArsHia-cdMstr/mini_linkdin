from django.urls import path
from . import views
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path("", views.home, name="Home"),
    path("signup", views.signup, name="signup-form"),
    path("profile/<str:username>/", views.profile, name="user_profile"),  # پروفایل با نام کاربری
    path("login", views.user_login, name="login"),
    path("explore/", views.explore, name="explore"),  # مسیر برای صفحه explore
    
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
