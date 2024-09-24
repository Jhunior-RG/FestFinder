"""
URL configuration for backend project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static
from django.urls import path
from api.views import SubirImagen
from api.views import AgregarTipoEstablecimiento
from api.views import ListarTiposEstablecimiento
from api.views import ListarEstablecimientos
from api.views import RegistrarEstablecimiento
from api.views.Etiqueta_Vista import CrearEtiqueta, ListarEtiquetas
from api.views.EtiquetaEstablecimiento_Vista import RegistrarRelacion, EtiquetasPorEstablecimiento, EstablecimientosPorEtiqueta
from api.views.Genero_Evento_Vista import CrearGeneroEvento, ListarGenerosEvento
from api.views.Evento_Vista import CrearEvento, ListarEventos
from api.views.Entrada_Vista import CrearEntrada, ListarEntradasEvento
from api.views.Consumo_Vista import CrearConsumo, ListarConsumosPorEstablecimiento
from api.views.Usuario_Vista import CrearUsuario, ListarUsuarios, LoginUsuario
from api.views.Visita_Vista import RegistrarVisita, VisitasPorEstablecimiento, VisitasPorUsuario
from api.views.Valoracion_Establecimiento_Vista import RegistrarValoracion, ValoracionesPorEstablecimiento
from api.views.Asistencia_Vista import RegistrarAsistencia, AsistenciasPorEventos, AsistenciasPorUsuario
from api.views.Valoracion_Evento_Vista import RegistrarValoracionEvento, ValoracionesPorEvento


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/subir-imagen/', SubirImagen.as_view(), name='subir-imagen'),
    path('api/tipo-establecimiento/', AgregarTipoEstablecimiento.as_view(), name='agregar-tipo-establecimiento'),
    path('api/tipos-establecimiento/', ListarTiposEstablecimiento.as_view(), name='listar-tipos-establecimiento'),
    path('api/reg-etiqueta-establecimiento/', RegistrarRelacion.as_view(), name='registrar-relacion'),
    path('api/etiquetas/establecimiento/<int:establecimiento_id>/', EtiquetasPorEstablecimiento.as_view(), name='etiquetas-por-establecimiento'),
    path('api/establecimientos/etiqueta/<int:etiqueta_id>/', EstablecimientosPorEtiqueta.as_view(), name='establecimientos-por-etiqueta'),
    path('api/genero-evento/', CrearGeneroEvento.as_view(), name='crear-genero-evento'),
    path('api/generos-evento/', ListarGenerosEvento.as_view(), name='listar-generos-evento'),
    path('api/evento/', CrearEvento.as_view(), name='crear-evento'),
    path('api/eventos/', ListarEventos.as_view(), name='listar-eventos'),
    path('entrada/', CrearEntrada.as_view(), name='crear-entrada'),
    path('entradas/evento/<int:id_evento>/', ListarEntradasEvento.as_view(), name='listar-entradas-evento'),
    path('api/consumo/', CrearConsumo.as_view(), name='crear-consumo'),
    path('api/consumos/establecimiento/<int:establecimiento_id>/', ListarConsumosPorEstablecimiento.as_view(), name='listar-consumos-por-establecimiento'),
    path('api/registrar_usuario/', CrearUsuario.as_view(), name='registrar_usuario'),
    path('api/usuarios/', ListarUsuarios.as_view(), name='listar-usuarios'),
    path('api/registrar-visita/', RegistrarVisita.as_view(), name='registrar-visita'),
    path('api/visitas/establecimiento/<int:establecimiento_id>/', VisitasPorEstablecimiento.as_view(), name='visitas-por-establecimiento'),
    path('api/visitas/usuario/<int:usuario_id>/', VisitasPorUsuario.as_view(), name='visitas-por-usuario'),
    path('api/registrar-valoracion/', RegistrarValoracion.as_view(), name='registrar-valoracion'),
    path('api/valoraciones/establecimiento/<int:establecimiento_id>/', ValoracionesPorEstablecimiento.as_view(), name='valoraciones-por-establecimiento'),
    path('api/asistencias/evento/<int:evento_id>/', AsistenciasPorEventos.as_view(), name='asistencia-por-evento'),
    path('api/asistencias/usuario/<int:usuario_id>/', AsistenciasPorUsuario.as_view(), name='asistencia-por-usuario'),
    path('api/registrar-asistencia/', RegistrarAsistencia.as_view(), name='registrar-asistencia'),
    path('api/registrar-valoracion-evento/', RegistrarValoracionEvento.as_view(), name='registrar-valoracion-evento'),
    path('api/valoraciones_eventos/evento/<int:evento_id>/', ValoracionesPorEvento.as_view(), name='valoraciones-por-evento'),
    path('api/logear_usuario/', LoginUsuario.as_view(), name='logear-usuario'),

] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
