# Generated by Django 4.2.5 on 2023-09-24 07:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('weather', '0002_rename_title_weather_cityname_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='weather',
            name='longitude',
            field=models.CharField(max_length=500),
        ),
    ]
