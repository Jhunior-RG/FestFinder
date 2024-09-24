from django.db import models
from .Evento import Evento 

class Entrada(models.Model):
    id_entrada = models.AutoField(primary_key=True)
    id_evento_fk = models.ForeignKey(Evento, on_delete=models.CASCADE)
    titulo_entrada = models.CharField(max_length=20)
    precio_entrada = models.DecimalField(max_digits=10, decimal_places=2)
    descripcion_entrada = models.CharField(max_length=100)
