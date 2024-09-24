from django.db import models

class Imagen(models.Model):
    imagen = models.ImageField(upload_to='imagenes/')
    descripcion = models.CharField(max_length=255, blank=True)
