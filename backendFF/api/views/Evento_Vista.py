from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from ..models import Evento
from ..serializers import EventoSerializer

# Vista para crear un evento
class CrearEvento(APIView):
    def post(self, request, *args, **kwargs):
        serializer = EventoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# Vista para listar todos los eventos
class ListarEventos(APIView):
    def get(self, request, *args, **kwargs):
        eventos = Evento.objects.all()
        serializer = EventoSerializer(eventos, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
