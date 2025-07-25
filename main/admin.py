from django.contrib import admin
from .models import MainH1

@admin.register(MainH1)
class MainH1Admin(admin.ModelAdmin):
    list_display = ['page', 'main_heading']
    list_editable = ['main_heading']