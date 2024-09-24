from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from ..models import Entrada
from ..serializers import EntradaSerializer

# Vista para crear una entrada
class CrearEntrada(APIView):
    def post(self, request, *args, **kwargs):
        serializer = EntradaSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# Vista para listar todas las entradas de un evento específico
class ListarEntradasEvento(APIView):
    def get(self, request, id_evento, *args, **kwargs):
        entradas = Entrada.objects.filter(id_evento_fk=id_evento)
        serializer = EntradaSerializer(entradas, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
