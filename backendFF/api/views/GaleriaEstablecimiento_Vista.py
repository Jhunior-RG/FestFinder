from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from ..models import GaleriaEstablecimiento
from ..serializers import GaleriaEstablecimientoSerializador

class GaleriaEstablecimiento(APIView):
    def get(self, request, id, *args, **kwargs):
        galerias = GaleriaEstablecimiento.objects.filter(establecimiento=id)
        serializer = GaleriaEstablecimientoSerializador(galerias, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

class RegistrarGaleriaEstablecimiento(APIView):
    def post(self, request, *args, **kwargs):
        serializer = GaleriaEstablecimientoSerializador(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)