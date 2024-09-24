from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from ..models.Visita import Visita
from ..models.ValoracionEstablecimiento import ValoracionEstablecimiento
from ..serializers.ValoracionEstablecimientoSerializer import ValoracionEstablecimientoSerializer

class RegistrarValoracion(APIView):
    def post(self, request, *args, **kwargs):
        serializer = ValoracionEstablecimientoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class ValoracionesPorEstablecimiento(APIView):
    def get(self, request, establecimiento_id, *args, **kwargs):
        visitas = Visita.objects.filter(id_establecimiento_visitado_fk=establecimiento_id)
        valoraciones = ValoracionEstablecimiento.objects.filter(id_visita_fk__in=visitas)
        serializer = ValoracionEstablecimientoSerializer(valoraciones, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)