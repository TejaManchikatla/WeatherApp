from django.db import models

# Create your models here.
class weather(models.Model):
    cityName=models.CharField(max_length=120)
    latitude = models.CharField(max_length=500)
    longitude=models.CharField(max_length=500)
    minTemp = models.CharField(max_length=10)
    maxTemp = models.CharField(max_length=10)
    temp = models.CharField(max_length=10)
    humidity = models.CharField(max_length=10)
    weatherIcon = models.CharField(max_length=100)
    weatherName = models.CharField(max_length=100)
    weatherDesc = models.CharField(max_length=100)
    def __str__(self):
        return self.cityName