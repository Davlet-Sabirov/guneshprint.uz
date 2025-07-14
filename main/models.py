from django.db import models



PAGES = [
        ('index', 'Главная страница'),
        ('labels', 'Этикетки'),
        ('packaging', 'Упаковки'),
        ('bags', 'Пакеты'),
        ('foils', 'Платинка'),
        ('flexoprint', 'Флексопечать'),
        ('about', 'О нас')
]



class MainH1(models.Model):
    page = models.CharField("Страница", max_length=50, choices=PAGES, unique=True)
    main_heading = models.CharField("Заголовок H1", max_length=200)

    def __str__(self):
        return f"{self.get_page_display()}: {self.main_heading}"

    class Meta:
        verbose_name = "Заголовок H1"
        verbose_name_plural = "Заголовки H1"



class Title(models.Model):
    page = models.CharField('Страница', max_length=50, choices=PAGES, unique=True)
    page_title = models.CharField('Описание', max_length=200)

    def __str__(self):
        return f"{self.get_page_display()}: {self.page_title}"

    class Meta:
        verbose_name = "Meta-title"
        verbose_name_plural = "Meta-titles"