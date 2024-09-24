from django.db import models

class GeneroEvento(models.Model):
    id_genero_evento = models.AutoField(primary_key=True)
    titulo_genero = models.CharField(max_length=40)
    descripcion_genero = models.CharField(max_length=50, blank=True)
