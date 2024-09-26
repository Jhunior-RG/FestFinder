from rest_framework import serializers
from ..models import Usuario
from django.contrib.auth.hashers import make_password


class UsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuario
        fields = '__all__'


    def validate_p_field(self, value):
        """Hash la contraseña antes de guardarla"""
        return make_password(value)
    
    