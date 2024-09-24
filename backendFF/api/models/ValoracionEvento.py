from django.db import models
from .Asistencia import Asistencia

class ValoracionEvento(models.Model):
    id_valoracion_evento = models.AutoField(primary_key=True)
    id_asistencia_fk = models.ForeignKey(Asistencia, on_delete=models.CASCADE)
    puntuacion = models.IntegerField()
    comentario = models.CharField(max_length=50, blank=True)
    fecha_publicacion = models.DateTimeField()
