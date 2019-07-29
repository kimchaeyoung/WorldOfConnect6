# Generated by Django 2.2.1 on 2019-07-29 00:24

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='ResultOmok',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('room', models.CharField(max_length=10)),
                ('color', models.CharField(max_length=10)),
                ('x', models.CharField(max_length=10, null=True)),
                ('y', models.IntegerField(null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Session',
            fields=[
                ('newid', models.CharField(max_length=10, primary_key=True, serialize=False, unique=True)),
                ('session_name', models.CharField(max_length=200, unique=True)),
                ('status', models.BooleanField(default=False)),
            ],
        ),
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
            name='Stone',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('color', models.CharField(default='white', max_length=10)),
                ('x1', models.CharField(max_length=10)),
                ('y1', models.IntegerField()),
                ('x2', models.CharField(blank=True, max_length=10, null=True)),
                ('y2', models.IntegerField(blank=True, null=True)),
                ('room', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='stone_session', to='api.Session')),
            ],
        ),
        migrations.CreateModel(
            name='Player',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('player1_name', models.CharField(max_length=50)),
                ('player2_name', models.CharField(blank=True, max_length=50, null=True)),
                ('player1_color', models.CharField(default='', max_length=10)),
                ('player2_color', models.CharField(blank=True, max_length=10, null=True)),
                ('player1_status', models.BooleanField(default=False)),
                ('player_session', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='player_session', to='api.Session')),
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
