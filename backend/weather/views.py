from django.shortcuts import render
from rest_framework import viewsets
# Create your views here.
from .serializers import WeatherSerializer
from .models import weather
from rest_framework.permissions import AllowAny
class weatherView(viewsets.ModelViewSet):
    permission_classes = (AllowAny,)
    serializer_class = WeatherSerializer
    queryset = weather.objects.all()