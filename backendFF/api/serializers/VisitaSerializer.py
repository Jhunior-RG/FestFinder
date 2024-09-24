from rest_framework import serializers
from ..models.Visita import Visita

class VisitaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Visita
        fields = ['id_visita', 'id_establecimiento_visitado_fk', 'id_usuario_fk']
