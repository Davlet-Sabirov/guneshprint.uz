from django.shortcuts import render

def index(request):
    return render(request, 'index.html')

def labels(request):
    return render(request, 'labels.html')

def packaging(request):
    return render(request, 'packaging.html')

def bags(request):
    return render(request, 'bags.html')

def foils(request):
    return render(request, 'foils.html')

def flexoprint(request):
    return render(request, 'flexoprint.html')

def about(request):
    return render(request, 'about.html')

def politics(request):
    return render(request, 'politics.html')

def terms(request):
    return render(request, 'terms.html')