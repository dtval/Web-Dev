from django.shortcuts import render
from django.http import JsonResponse
from .models import Product, Category

# Create your views here.
def get_products(request):
    products = [product.to_json() for product in Product.objects.all()]
    data = {
        'products': products
    }
    return JsonResponse(data=data)

def get_product(request, id):
    product = Product.objects.get(pk=id)
    return JsonResponse(product.to_json())

def get_categories(request):
    categories = [category.to_json() for category in Category.objects.all()]
    data = {
        'categories': categories
    }
    return JsonResponse(data=data)

def get_category(request, id):
    category = Category.objects.get(pk=id)
    return JsonResponse(category.to_json())

def get_category_products(request, id):
    products = [product.to_json() for product in Product.objects.filter(category_id=id)]
    data = {
        'products': products
    }
    return JsonResponse(data)