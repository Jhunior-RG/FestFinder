from rest_framework import serializers
from ..models.ValoracionEstablecimiento import ValoracionEstablecimiento

class ValoracionEstablecimientoSerializer(serializers.ModelSerializer):
    class Meta:
        model = ValoracionEstablecimiento
        fields = ['id_valoracion_establecimiento', 'id_visita_fk', 'puntuacion', 'comentario', 'fecha_publicacion']
