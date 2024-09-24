from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework import status
from ..models import TipoEstablecimiento
from ..serializers import TipoEstablecimientoSerializer

class ListarTiposEstablecimiento(APIView):
    parser_classes = (MultiPartParser, FormParser)

    def get(self, request, *args, **kwargs):
        tipos_establecimiento = TipoEstablecimiento.objects.all()
        serializer = TipoEstablecimientoSerializer(tipos_establecimiento, many=True)
        return Response(serializer.data)