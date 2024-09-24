from rest_framework import serializers
from ..models import Entrada

class EntradaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Entrada
        fields = ['id_entrada', 'id_evento_fk', 'titulo_entrada', 'precio_entrada', 'descripcion_entrada']
