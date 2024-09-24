from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from ..models.Asistencia import Asistencia
from ..models.ValoracionEvento import ValoracionEvento
from ..serializers.ValoracionEventoSerializer import ValoracionEventoSerializer

class RegistrarValoracionEvento(APIView):
    def post(self, request, *args, **kwargs):
        serializer = ValoracionEventoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class ValoracionesPorEvento(APIView):
    def get(self, request, evento_id, *args, **kwargs):
        asistencias = Asistencia.objects.filter(id_evento_asistido_fk=evento_id)
        valoraciones = ValoracionEvento.objects.filter(id_asistencia_fk__in=asistencias)
        serializer = ValoracionEventoSerializer(valoraciones, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)