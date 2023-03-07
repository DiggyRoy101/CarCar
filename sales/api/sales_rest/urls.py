from django.urls import path
from .views import list_sales_people, list_customers, list_sales_record

urlpatterns = [
    path("sales_people/", list_sales_people, name="create_sales_person"),
    path("customers/", list_customers, name="create_customer"),
    path("sales/", list_sales_record, name="create_sale"),
]
