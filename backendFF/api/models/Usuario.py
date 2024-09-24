from django.db import models

class Usuario(models.Model):
    id_usuario = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=100)
    email = models.EmailField(max_length=100, unique=True)
    telefono = models.CharField(max_length=20, blank=True, null=True)
    p_field = models.CharField(max_length=50, blank=True, null=True)  
    g_id = models.CharField(max_length=50, blank=True, null=True)

   