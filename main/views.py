from django.shortcuts import render
from .models import MainH1, Title


def index(request):
    h1_content = MainH1.objects.filter(page='index').first()
    title_content = Title.objects.filter(page='index').first()
    return render(request, 'index.html', {
        'h1_content': h1_content,
        'title_content': title_content
    })

def labels(request):
    h1_content = MainH1.objects.filter(page='labels').first()
    title_content = Title.objects.filter(page='labels').first()
    return render(request, 'labels.html', {
        'h1_content': h1_content,
        'title_content': title_content
    })

def packaging(request):
    h1_content = MainH1.objects.filter(page='packaging').first()
    title_content = Title.objects.filter(page='packaging').first()
    return render(request, 'packaging.html', {
        'h1_content': h1_content,
        'title_content': title_content
    })

def bags(request):
    h1_content = MainH1.objects.filter(page='bags').first()
    title_content = Title.objects.filter(page='bags').first()
    return render(request, 'bags.html', {
        'h1_content': h1_content,
        'title_content': title_content
    })

def foils(request):
    h1_content = MainH1.objects.filter(page='foils').first()
    title_content = Title.objects.filter(page='foils').first()
    return render(request, 'foils.html', {
        'h1_content': h1_content,
        'title_content': title_content
    })

def flexoprint(request):
    h1_content = MainH1.objects.filter(page='flexoprint').first()
    title_content = Title.objects.filter(page='flexoprint').first()
    return render(request, 'flexoprint.html', {
        'h1_content': h1_content,
        'title_content': title_content
    })

def about(request):
    h1_content = MainH1.objects.filter(page='about').first()
    title_content = Title.objects.filter(page='about').first()
    return render(request, 'about.html', {
        'h1_content': h1_content,
        'title_content': title_content
    })

def politics(request):
    return render(request, 'politics.html')

def terms(request):
    return render(request, 'terms.html')