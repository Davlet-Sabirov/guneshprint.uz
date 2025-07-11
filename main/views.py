from django.shortcuts import render
from .models import MainH1


def index(request):
    content = MainH1.objects.filter(page_name='index').first()
    return render(request, 'index.html', {'content': content})

def labels(request):
    content = MainH1.objects.filter(page_name='labels').first()
    return render(request, 'labels.html', {'content': content})

def packaging(request):
    content = MainH1.objects.filter(page_name='packaging').first()
    return render(request, 'packaging.html', {'content': content})

def bags(request):
    content = MainH1.objects.filter(page_name='bags').first()
    return render(request, 'bags.html', {'content': content})

def foils(request):
    content = MainH1.objects.filter(page_name='foils').first()
    return render(request, 'foils.html', {'content': content})

def flexoprint(request):
    content = MainH1.objects.filter(page_name='flexoprint').first()
    return render(request, 'flexoprint.html', {'content': content})

def about(request):
    content = MainH1.objects.filter(page_name='about').first()
    return render(request, 'about.html', {'content': content})

def politics(request):
    return render(request, 'politics.html')

def terms(request):
    return render(request, 'terms.html')