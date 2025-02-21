from django.contrib import admin
from django.urls import path, include
from accounts.views import register_view, forgot_password_view

urlpatterns = [
    path('admin/', admin.site.urls),
    path('accounts/', include('allauth.urls')),
    path('register/', register_view, name='register'),
    path('forgot/', forgot_password_view, name='forgot_password'),
]