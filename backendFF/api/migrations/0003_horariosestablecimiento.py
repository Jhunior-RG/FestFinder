# Generated by Django 5.1.1 on 2024-09-26 03:53

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_alter_usuario_g_id_alter_usuario_p_field'),
    ]

    operations = [
        migrations.CreateModel(
            name='horariosEstablecimiento',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('dia', models.TextField(max_length=1)),
                ('inicio_atencion', models.TimeField()),
                ('fin_atencion', models.TimeField()),
                ('establecimiento', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.establecimiento')),
            ],
            options={
                'unique_together': {('establecimiento', 'dia')},
            },
        ),
    ]
