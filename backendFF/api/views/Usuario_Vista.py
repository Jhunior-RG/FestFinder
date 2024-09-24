from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from ..models import Usuario
from ..serializers import UsuarioSerializer


class CrearUsuario(APIView):
    def post(self, request, *args, **kwargs):
        serializer = UsuarioSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ListarUsuarios(APIView):
    def get(self, request, *args, **kwargs):
        usuarios = Usuario.objects.all()
        serializer = UsuarioSerializer(usuarios, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
