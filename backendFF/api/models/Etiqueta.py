from django.db import models

class Etiqueta(models.Model):
    id_etiqueta = models.AutoField(primary_key=True)
    texto_etiqueta = models.CharField(max_length=50)

 