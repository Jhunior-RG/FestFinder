from django.db import models
from .Visita import Visita

class ValoracionEstablecimiento(models.Model):
    id_valoracion_establecimiento = models.AutoField(primary_key=True)
    id_visita_fk = models.ForeignKey(Visita, on_delete=models.CASCADE)
    puntuacion = models.IntegerField()
    comentario = models.CharField(max_length=50, blank=True)
    fecha_publicacion = models.DateTimeField()
