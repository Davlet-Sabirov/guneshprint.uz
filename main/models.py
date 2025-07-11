from django.db import models


class MainH1(models.Model):
    PAGE_CHOICES = [
        ('index', 'Главная страница'),
        ('labels', 'Этикетки'),
        ('packaging', 'Упаковки'),
        ('bags', 'Пакеты'),
        ('foils', 'Платинка'),
        ('flexoprint', 'Флексопечать'),
        ('about', 'О нас')
    ]

    page_name = models.CharField("Название страницы", max_length=50, choices=PAGE_CHOICES, unique=True)
    main_heading = models.CharField("Заголовок H1", max_length=200)

    def __str__(self):
        return f"{self.get_page_name_display()}: {self.main_heading}"

    class Meta:
        verbose_name = "Заголовок H1"
        verbose_name_plural = "Заголовки H1"