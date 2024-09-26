import logging

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.hashers import check_password
from ..models import Usuario
from ..serializers import UsuarioSerializer

logger = logging.getLogger(__name__)

#Registrar un nuevo usuario
class CrearUsuario(APIView):
    def post(self, request, *args, **kwargs):
        serializer = UsuarioSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


#Devolver todos los usuarios
class ListarUsuarios(APIView):
    def get(self, request, *args, **kwargs):
        usuarios = Usuario.objects.all()
        serializer = UsuarioSerializer(usuarios, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class LoginUsuario(APIView):
    def post(self, request, *args, **kwargs):
        email = request.data.get('email')
        password = request.data.get('password')
        g_id = request.data.get('g_id', "")  # Obtener g_id, default a ""

        # Log del input recibido
        logger.info(f"Login attempt: email={email}, g_id={g_id}")

        # Caso 1: Inicio de sesión con Google ID
        if g_id:
            logger.info("Caso: Google ID login")  # Log para ver si se entra en este caso
            try:
                user = Usuario.objects.get(g_id=g_id)
                logger.info(f"Usuario encontrado con Google ID: {g_id}")
                serializer = UsuarioSerializer(user)
                return Response(serializer.data, status=status.HTTP_200_OK)
            except Usuario.DoesNotExist:
                logger.warning(f"Usuario con Google ID {g_id} no encontrado")
                return Response({"detail": "Usuario no encontrado"}, status=status.HTTP_404_NOT_FOUND)
        
        # Caso 2: Inicio de sesión con email y contraseña
        else:
            logger.info("Caso: Email y password login")  # Log para ver si se entra en este caso
            try:
                user = Usuario.objects.get(email=email)
                logger.info(f"Usuario encontrado con email: {email}")
                
                if check_password(password, user.p_field):  # Comprobar la contraseña
                    logger.info(f"Contraseña correcta para el usuario {email}")
                    serializer = UsuarioSerializer(user)
                    return Response(serializer.data, status=status.HTTP_200_OK)
                else:
                    logger.warning(f"Contraseña {password} incorrecta para el usuario {email}")
                    return Response({"detail": "Contraseña incorrecta"}, status=status.HTTP_401_UNAUTHORIZED)
            except Usuario.DoesNotExist:
                logger.warning(f"Usuario con email {email} no encontrado")
                return Response({"detail": "Usuario no encontrado"}, status=status.HTTP_404_NOT_FOUND)