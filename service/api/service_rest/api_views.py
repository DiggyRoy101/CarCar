from django.shortcuts import render
from common.json import ModelEncoder
from django.http import JsonResponse
import json
from django.views.decorators.http import require_http_methods
from .models import Appointments, Technician, AutomobileVO


class AutomobileVOEncoder(ModelEncoder):
    model = AutomobileVO
    properties = [
        "import_href",
        "vin",
    ]
class TechnicianEncoder(ModelEncoder):
    model = Technician
    properties= [
        "name",
        "employee_no",
        "id"
    ]

class ListAppointmentsEncoder(ModelEncoder):
    model = Appointments
    properties = [
        "vin",
        "customer_name",
        "date",
        "time",
        "technician",
        "reason",
        "vip",
        "completion"
    ]
    encoders = {
        "vehicle": AutomobileVOEncoder(),
        "technician": TechnicianEncoder(),
    }

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
            technician_id = content["technician"]
            technician = Technician.objects.get(id=technician_id)
            content["technician"] = technician
        except Exception as e:
            return JsonResponse(str(e), safe=False)
            
        
        newAppointment = Appointments.objects.create(**content)
        return JsonResponse(
            newAppointment,
            encoder=ListAppointmentsEncoder,
            safe=False,
        )

@require_http_methods(["GET", "DELETE"])
def api_show_appointment(request, id=None):
    if request.method == "GET":
        appointment = Appointments.objects.get(id=id)
        return JsonResponse(
            appointment,
            encoder=ListAppointmentsEncoder,
            safe=False,
        )
    elif request.method == "DELETE":
        count, _ = Appointments.objects.filter(id=id).delete()
        return JsonResponse({"deleted": count > 0})

# @require_http_methods(["GET", "POST"])
# def api_list_service_history(request, appointment_vehicle=None):
#     if request.method == "GET":
#         appointments = Appointments.objects.filter(, status=True)
#         return JsonResponse(
#             {"appointments": appointments},
#             encoder=ListAppointmentsEncoder,
#         )
#     else:
#         content = json.loads(request.body)
#         try:
#             bin_href = content["bin"]
#             bin = BinVo.objects.get(import_href=bin_href)
#             content["bin"] = bin
#         except BinVo.DoesNotExist:
#             return JsonResponse(
#                 {"message": "Invalid bin id"},
#                 status=400,
#             )
        
#         newBin = Shoes.objects.create(**content)
#         return JsonResponse(
#             newBin,
#             encoder=ListAppointmentsEncoder,
#             safe=False,
#         )   
    
@require_http_methods(["GET","POST"])
def api_list_technician(request):
    if request.method =="GET":
        technicians = Technician.objects.all()
        return JsonResponse(
            {"technicians": technicians},
            encoder=TechnicianEncoder,
        )
    else:
        content = json.loads(request.body)
        technician = Technician.objects.create(**content)
        return JsonResponse(
            technician,
            encoder=TechnicianEncoder,
            safe=False,
        )


@require_http_methods(["GET", "DELETE"])
def api_show_technician(request, id=None):
    if request.method == "GET":
        location = Technician.objects.get(id=id)
        return JsonResponse(
            location,
            encoder=TechnicianEncoder,
            safe=False,
        )
    elif request.method == "DELETE":
        count, _ = Technician.objects.filter(id=id).delete()
        return JsonResponse({"deleted": count > 0}) 



