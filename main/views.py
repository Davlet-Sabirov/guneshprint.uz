from django.shortcuts import render
from .models import MainH1


def index(request):
    h1_content = MainH1.objects.filter(page='index').first()
    return render(request, 'index.html', {
        'h1_content': h1_content
    })

def labels(request):
    h1_content = MainH1.objects.filter(page='labels').first()
    return render(request, 'labels.html', {
        'h1_content': h1_content
    })

def packaging(request):
    h1_content = MainH1.objects.filter(page='packaging').first()
    return render(request, 'packaging.html', {
        'h1_content': h1_content
    })

def bags(request):
    h1_content = MainH1.objects.filter(page='bags').first()
    return render(request, 'bags.html', {
        'h1_content': h1_content
    })

def foils(request):
    h1_content = MainH1.objects.filter(page='foils').first()
    return render(request, 'foils.html', {
        'h1_content': h1_content
    })

def flexoprint(request):
    h1_content = MainH1.objects.filter(page='flexoprint').first()
    return render(request, 'flexoprint.html', {
        'h1_content': h1_content
    })

def about(request):
    h1_content = MainH1.objects.filter(page='about').first()
    return render(request, 'about.html', {
        'h1_content': h1_content
    })

def politics(request):
    return render(request, 'politics.html')

def terms(request):
    return render(request, 'terms.html')