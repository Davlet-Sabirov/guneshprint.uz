from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='home'),
    path('labels/', views.labels, name='labels'),
    path('packaging/', views.packaging, name='packaging'),
    path('bags/', views.bags, name='bags'),
    path('foils/', views.foils, name='foils'),
    path('flexoprint/', views.flexoprint, name='flexoprint'),
    path('about/', views.about, name='about'),
    path('politics/', views.politics, name='politics'),
    path('terms/', views.terms, name='terms')
]
