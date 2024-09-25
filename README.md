Backend
python -m venv venv

venv\Scripts\activate o activar en vscode ctrl+shift+p python: select interpreter

pip install -r requirements.txt

Migraciones de la Base de Datos
python manage.py makemigrations si hay cambios en modelos

python manage.py migrate subir a la base de datos

Ejecutar el Servidor de Desarrollo
python manage.py runserver
