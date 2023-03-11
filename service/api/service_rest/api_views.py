from django.shortcuts import render
from common.json import ModelEncoder
from django.http import JsonResponse
import json
from django.views.decorators.http import require_http_methods
from .api_encoders import ListAppointmentsEncoder, TechnicianEncoder
from .models import Appointments, Technician, AutomobileVO


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


@require_http_methods(["GET", "DELETE", "PUT"])
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
    else:
        request.method == "PUT"
        content = json.loads(request.body)
        Appointments.objects.filter(id=id).update(**content)
        appointment = Appointments.objects.get(id=id)
        return JsonResponse(
            appointment,
            encoder=ListAppointmentsEncoder,
            safe=False,
        )


@require_http_methods(["GET", "POST"])
def api_list_technician(request):
    if request.method == "GET":
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
