from django.urls import path
from .views import list_sales_people

urlpatterns = [
    path("sales_people/", list_sales_people, name="create_sales_person"),
]
