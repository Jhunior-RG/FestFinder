from rest_framework import serializers
from ..models import Etiqueta

class EtiquetaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Etiqueta
        fields = ['id_etiqueta', 'texto_etiqueta']
