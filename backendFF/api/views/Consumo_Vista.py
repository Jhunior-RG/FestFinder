from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from ..models import Consumo
from ..serializers import ConsumoSerializer

class CrearConsumo(APIView):
    def post(self, request, *args, **kwargs):
        serializer = ConsumoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class ListarConsumosPorEstablecimiento(APIView):
    def get(self, request, establecimiento_id, *args, **kwargs):
        consumos = Consumo.objects.filter(id_establecimiento_fk=establecimiento_id)
        serializer = ConsumoSerializer(consumos, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
