from django.urls import path
from .views import list_sales_people, list_customers

urlpatterns = [
    path("sales_people/", list_sales_people, name="create_sales_person"),
    path("customers/", list_customers, name="create_customer"),
]
