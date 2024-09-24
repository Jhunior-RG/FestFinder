from django.db import models
from .Establecimiento import Establecimiento
from .Imagen import Imagen

class GaleriaEstablecimiento(models.Model):
    establecimiento = models.ForeignKey(Establecimiento, on_delete=models.CASCADE)
    imagen = models.ForeignKey(Imagen, on_delete=models.CASCADE)

    class Meta:
        unique_together = ('establecimiento', 'imagen')
