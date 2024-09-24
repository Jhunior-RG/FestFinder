from rest_framework import serializers
from ..models import GeneroEvento

class GeneroEventoSerializer(serializers.ModelSerializer):
    class Meta:
        model = GeneroEvento
        fields = ['id_genero_evento', 'titulo_genero', 'descripcion_genero']
