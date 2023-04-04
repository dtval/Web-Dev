from django.urls import path

from .views import get_products, get_product, get_categories, get_category, get_category_products

urlpatterns = [
    path('products/', get_products),
    path('category/', get_categories),
    path('products/<int:id>', get_product),
    path('category/<int:id>', get_category),
    path('category/<int:id>/products', get_category_products),
]