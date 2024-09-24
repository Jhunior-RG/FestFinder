# api/serializers.py

from rest_framework import serializers
from ..models import  GaleriaEstablecimiento

class GaleriaEstablecimientoSerializer(serializers.ModelSerializer):
    class Meta:
        model = GaleriaEstablecimiento
        fields = ['establecimiento', 'imagen']