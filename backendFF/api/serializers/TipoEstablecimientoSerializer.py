# mi_app/serializers/tipo_establecimiento.py
from rest_framework import serializers
from ..models import TipoEstablecimiento

class TipoEstablecimientoSerializer(serializers.ModelSerializer):
    class Meta:
        model = TipoEstablecimiento
        fields = ['id', 'nombre_tipo', 'descripcion_tipo']
