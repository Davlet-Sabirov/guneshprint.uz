from django.contrib import admin
from .models import MainH1, Title

@admin.register(MainH1)
class MainH1Admin(admin.ModelAdmin):
    list_display = ['page', 'main_heading']
    list_editable = ['main_heading']

@admin.register(Title)
class TitleAdmin(admin.ModelAdmin):
    list_display = ['page', 'page_title']
    list_editable = ['page_title']