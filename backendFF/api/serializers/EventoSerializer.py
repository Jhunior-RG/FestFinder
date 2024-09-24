from rest_framework import serializers
from ..models import Evento

class EventoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Evento
        fields = ['id_evento', 'nombre', 'banner', 'logo', 'fecha_inicio', 'id_establecimiento', 'fecha_final', 'horario_inicio', 'horario_fin', 'id_genero_fk']
