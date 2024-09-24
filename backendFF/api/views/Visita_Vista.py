from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from ..models.Visita import Visita
from ..serializers.VisitaSerializer import VisitaSerializer

class RegistrarVisita(APIView):
    def post(self, request, *args, **kwargs):
        serializer = VisitaSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class VisitasPorEstablecimiento(APIView):
    def get(self, request, establecimiento_id, *args, **kwargs):
        visitas = Visita.objects.filter(id_establecimiento_visitado_fk=establecimiento_id)
        serializer = VisitaSerializer(visitas, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    

class VisitasPorUsuario(APIView):
    def get(self, request, usuario_id, *args, **kwargs):
        visitas = Visita.objects.filter(id_usuario_fk=usuario_id)
        serializer = VisitaSerializer(visitas, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
