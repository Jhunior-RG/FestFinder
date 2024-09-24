from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from ..models import Etiqueta, Establecimiento
from ..serializers import EtiquetaSerializer, EstablecimientoSerializer

# Vista para registrar la relación entre etiqueta y establecimiento
class RegistrarRelacion(APIView):
    def post(self, request, *args, **kwargs):
        id_etiqueta = request.data.get('id_etiqueta')
        id_establecimiento = request.data.get('id_establecimiento')

        if not id_etiqueta or not id_establecimiento:
            return Response({"error": "id_etiqueta y id_establecimiento son requeridos."}, status=status.HTTP_400_BAD_REQUEST)

        etiqueta = get_object_or_404(Etiqueta, id=id_etiqueta)
        establecimiento = get_object_or_404(Establecimiento, id=id_establecimiento)

        # Crear la relación
        etiqueta.establecimientos.add(establecimiento)

        return Response({"message": "Relación registrada exitosamente."}, status=status.HTTP_201_CREATED)

# Vista para obtener las etiquetas de un establecimiento
class EtiquetasPorEstablecimiento(APIView):
    def get(self, request, establecimiento_id, *args, **kwargs):
        establecimiento = get_object_or_404(Establecimiento, id=establecimiento_id)
        etiquetas = establecimiento.etiquetas.all()
        serializer = EtiquetaSerializer(etiquetas, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

# Vista para obtener los establecimientos de una etiqueta
class EstablecimientosPorEtiqueta(APIView):
    def get(self, request, etiqueta_id, *args, **kwargs):
        etiqueta = get_object_or_404(Etiqueta, id=etiqueta_id)
        establecimientos = etiqueta.establecimientos.all()
        serializer = EstablecimientoSerializer(establecimientos, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
