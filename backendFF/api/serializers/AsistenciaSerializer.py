from rest_framework import serializers
from ..models.Asistencia import Asistencia

class AsistenciaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Asistencia
        fields = ['id_asistencia', 'id_evento_asistido_fk', 'id_usuario_fk']
