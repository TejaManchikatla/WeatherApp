from rest_framework import serializers
from .models import weather

class WeatherSerializer(serializers.ModelSerializer):
    class Meta:
        model = weather
        field = ('id', 'cityName', 'latitude', 'longitude', 'minTemp', 'maxTemp', 'temp', 'humidity','weatherIcon','weatherDesc','weatherName')
        fields = "__all__"
