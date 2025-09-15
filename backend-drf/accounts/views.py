from django.shortcuts import render # type: ignore
from .serializers import UserSerializer
from rest_framework import generics # type: ignore
from django.contrib.auth.models import User # type: ignore
from rest_framework.permissions import AllowAny # type: ignore
# Create your views here.


class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]  # Allow any user (authenticated or not) to access this view