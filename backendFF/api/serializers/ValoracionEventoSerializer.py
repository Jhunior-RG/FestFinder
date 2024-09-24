from rest_framework import serializers
from ..models.ValoracionEvento import ValoracionEvento

class ValoracionEventoSerializer(serializers.ModelSerializer):
    class Meta:
        model = ValoracionEvento
        fields = ['id_valoracion_evento', 'id_asistencia_fk', 'puntuacion', 'comentario', 'fecha_publicacion']
