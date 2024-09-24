from django.db import models
from .Establecimiento import Establecimiento  # Asegúrate de tener este modelo en su archivo correspondiente

class Consumo(models.Model):
    id_consumo = models.AutoField(primary_key=True)
    id_establecimiento_fk = models.ForeignKey(Establecimiento, on_delete=models.CASCADE)
    titulo_consumo = models.CharField(max_length=20)
    precio_consumo = models.DecimalField(max_digits=10, decimal_places=2)
    descripcion_consumo = models.CharField(max_length=100, blank=True)
