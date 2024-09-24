from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from ..models import GeneroEvento
from ..serializers import GeneroEventoSerializer

# Vista para crear un género de evento
class CrearGeneroEvento(APIView):
    def post(self, request, *args, **kwargs):
        serializer = GeneroEventoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# Vista para listar todos los géneros de eventos
class ListarGenerosEvento(APIView):
    def get(self, request, *args, **kwargs):
        generos_evento = GeneroEvento.objects.all()
        serializer = GeneroEventoSerializer(generos_evento, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
