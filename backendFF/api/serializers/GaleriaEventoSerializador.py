# api/serializers.py

from rest_framework import serializers
from ..models import  GaleriaEvento

class GaleriaEventoSerializado(serializers.ModelSerializer):
    class Meta:
        model = GaleriaEvento
        fields = ['evento', 'imagen']