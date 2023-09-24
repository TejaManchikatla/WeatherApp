from django.contrib import admin
from .models import weather
# Register your models here.
class weatherAdmin(admin.ModelAdmin):
    list_display = ("cityName", "latitude", "longitude", "minTemp", "maxTemp", "temp", "humidity", "weatherIcon", "weatherDesc","weatherName")

admin.site.register(weather, weatherAdmin)
