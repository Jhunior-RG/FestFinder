from django.db import models

class TipoEstablecimiento(models.Model):
    nombre_tipo = models.CharField(max_length=30)
    descripcion_tipo = models.CharField(max_length=100, blank=True)