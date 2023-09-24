from django.shortcuts import render
from rest_framework import viewsets
# Create your views here.
from .serializers import WeatherSerializer
from .models import weather

class weatherView(viewsets.ModelViewSet):
    serializer_class = WeatherSerializer
    queryset = weather.objects.all()