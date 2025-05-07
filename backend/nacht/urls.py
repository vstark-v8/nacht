from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views.users import UserViewSet
from .views.files import FileViewSet
from .views.login import LoginView, LogoutView

router = DefaultRouter()
router.register(r'users', UserViewSet, basename='user')
router.register(r'files', FileViewSet, basename='files')

urlpatterns = [
    path('', include(router.urls)),
    path('login', LoginView.as_view()),
    path('logout', LogoutView.as_view()),
]
