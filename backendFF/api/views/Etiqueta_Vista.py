from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework import status
from ..models import Etiqueta
from ..serializers import EtiquetaSerializer

# Vista para crear etiquetas
class CrearEtiqueta(APIView):
    def post(self, request, *args, **kwargs):
        serializer = EtiquetaSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# Vista para listar etiquetas
class ListarEtiquetas(APIView):
    def get(self, request, *args, **kwargs):
        etiquetas = Etiqueta.objects.all()
        serializer = EtiquetaSerializer(etiquetas, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
