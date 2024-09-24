# mi_app/models/establecimiento.py
from django.db import models
from .Etiqueta import Etiqueta
from .Establecimiento import Establecimiento

class EtiquetaEstablecimiento(models.Model):
    id_establecimiento = models.ForeignKey(Establecimiento, on_delete=models.CASCADE)
    id_etiqueta = models.ForeignKey(Etiqueta, on_delete=models.CASCADE)
    

