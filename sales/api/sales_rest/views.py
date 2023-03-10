from .encoders import SalesListEncoder, SalesPersonListEncoder, CustomerListEncoder, AutomobileVOEncoder
from .models import SalesPerson, Customer, SalesRecord, AutomobileVO
from django.views.decorators.http import require_http_methods
import json
from django.http import JsonResponse


@require_http_methods(["GET"])
def list_auto_VO(request):
    if request.method == "GET":
        autos = AutomobileVO.objects.all()
        return JsonResponse(
            {"autos": autos},
            encoder=AutomobileVOEncoder
        )


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


@require_http_methods(["GET", "POST"])
def list_customers(request):
    if request.method == "GET":
        customers = Customer.objects.all()
        return JsonResponse(
            {"customers": customers},
            encoder=CustomerListEncoder,
        )
    else:
        content = json.loads(request.body)
        customer = Customer.objects.create(**content)
        return JsonResponse(
            customer,
            encoder=CustomerListEncoder,
            safe=False
        )


@require_http_methods(["GET", "POST"])
def list_sales_record(request):
    if request.method == "GET":
        sales = SalesRecord.objects.all()
        return JsonResponse(
            {"sales": sales},
            encoder=SalesListEncoder,
        )
    else:
        content = json.loads(request.body)
        try:
            automobile_href = content["automobile"]
            AutomobileVO.objects.filter(
                import_href=automobile_href).update(sold=True)
            automobile = AutomobileVO.objects.get(import_href=automobile_href)
            content["automobile"] = automobile
            sales_person_id = content["sales_person_id"]
            sales_person = SalesPerson.objects.get(id=sales_person_id)
            content["sales_person"] = sales_person
            customer_id = content["customer_id"]
            customer = Customer.objects.get(id=customer_id)
            content["customer"] = customer
            sale = SalesRecord.objects.create(**content)
            return JsonResponse(
                sale,
                encoder=SalesListEncoder,
                safe=False
            )
        except Exception as e:
            return JsonResponse(str(e), safe=False)
