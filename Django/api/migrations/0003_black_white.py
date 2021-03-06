# Generated by Django 2.2.1 on 2019-07-26 05:20

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_auto_20190726_0241'),
    ]

    operations = [
        migrations.CreateModel(
            name='White',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('x1', models.CharField(max_length=10)),
                ('y1', models.IntegerField()),
                ('x2', models.CharField(blank=True, max_length=10, null=True)),
                ('y2', models.IntegerField(blank=True, null=True)),
                ('room', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='white_room', to='api.Session')),
            ],
        ),
        migrations.CreateModel(
            name='Black',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('x1', models.CharField(max_length=10)),
                ('y1', models.IntegerField()),
                ('x2', models.CharField(blank=True, max_length=10, null=True)),
                ('y2', models.IntegerField(blank=True, null=True)),
                ('room', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='black_room', to='api.Session')),
            ],
        ),
    ]
