from django.shortcuts import render
from common.json import ModelEncoder
from django.http import JsonResponse
import json
from django.views.decorators.http import require_http_methods
from .models import Appointments

class ListAppointmentsEncoder(ModelEncoder):
    model = Appointments
    properties = [
        "vin",
        "customer_name",
        "date",
        "time",
        "technician",
        "reason"
    ]
    
@require_http_methods(["GET", "POST"])
def api_list_appointments(request):
    if request.method == "GET":
        appointments = Appointments.objects.all()
        return JsonResponse(
            {"appointments": appointments},
            encoder=ListAppointmentsEncoder,
        )
    else:
        content = json.loads(request.body)
        try:
            bin_href = content["bin"]
            bin = BinVo.objects.get(import_href=bin_href)
            content["bin"] = bin
        except BinVo.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid bin id"},
                status=400,
            )
        
        newBin = Shoes.objects.create(**content)
        return JsonResponse(
            newBin,
            encoder=ListAppointmentsEncoder,
            safe=False,
        )

@require_http_methods(["GET","DELETE"])
def api_show_shoes(request, id=None):
    if request.method == "GET":
        location = Shoes.objects.get(id=id)
        return JsonResponse(
            location,
            encoder=ListAppointmentsEncoder,
            safe=False,
        )
    elif request.method == "DELETE":
        count, _ = Shoes.objects.filter(id=id).delete()
        return JsonResponse({"deleted": count > 0})

@require_http_methods(["GET", "POST"])
def api_list_service_history(request):
