from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from ..models import Establecimiento
from ..serializers import EstablecimientoSerializer

class ListarEstablecimientos(APIView):
    def get(self, request, *args, **kwargs):
        establecimientos = Establecimiento.objects.all()
        serializer = EstablecimientoSerializer(establecimientos, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
