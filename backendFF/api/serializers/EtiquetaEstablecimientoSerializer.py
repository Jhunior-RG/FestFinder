# api/serializers.py

from rest_framework import serializers
from ..models import  EtiquetaEstablecimiento

class EtiquetaEstablecimientoSerializer(serializers.ModelSerializer):
    class Meta:
        model = EtiquetaEstablecimiento
        fields = ['id_establecimiento_fk', 'id_etiqueta_fk']