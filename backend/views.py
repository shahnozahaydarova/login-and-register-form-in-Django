from django.shortcuts import render

def register(request):
    return render(request,'register.html')

def password(request):
    return render(request,'password.html')