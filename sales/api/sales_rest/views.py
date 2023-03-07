from django.shortcuts import render
from .models import AutomobileVO, SalesPerson, SalesRecord, Customer
from common.json import ModelEncoder
from django.views.decorators.http import require_http_methods
import json
from django.http import JsonResponse

# Create your views here.


class SalesPersonListEncoder(ModelEncoder):
    model = SalesPerson
    properties = [
        "name",
        "employee_number",
    ]


@require_http_methods(["GET", "POST"])
def list_sales_people(request):
    if request.method == "GET":
        sales_people = SalesPerson.objects.all()
        return JsonResponse(
            {"sales_people": sales_people},
            encoder=SalesPersonListEncoder,
        )
    else:
        content = json.loads(request.body)
        sales_person = SalesPerson.objects.create(**content)
        return JsonResponse(
            sales_person,
            encoder=SalesPersonListEncoder,
            safe=False,
        )
