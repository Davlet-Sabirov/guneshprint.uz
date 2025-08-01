# Generated by Django 5.1.4 on 2025-07-11 15:50

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='MainH1',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('page', models.CharField(choices=[('index', 'Главная страница'), ('labels', 'Этикетки'), ('packaging', 'Упаковки'), ('bags', 'Пакеты'), ('foils', 'Платинка'), ('flexoprint', 'Флексопечать'), ('about', 'О нас')], max_length=50, unique=True, verbose_name='Страница')),
                ('main_heading', models.CharField(max_length=200, verbose_name='Заголовок H1')),
            ],
            options={
                'verbose_name': 'Заголовок H1',
                'verbose_name_plural': 'Заголовки H1',
            },
        ),
        migrations.CreateModel(
            name='Title',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('page', models.CharField(choices=[('index', 'Главная страница'), ('labels', 'Этикетки'), ('packaging', 'Упаковки'), ('bags', 'Пакеты'), ('foils', 'Платинка'), ('flexoprint', 'Флексопечать'), ('about', 'О нас')], max_length=50, unique=True, verbose_name='Страница')),
                ('page_title', models.CharField(blank=True, max_length=200, verbose_name='Описание')),
            ],
            options={
                'verbose_name': 'Meta-title',
                'verbose_name_plural': 'Meta-titles',
            },
        ),
    ]
