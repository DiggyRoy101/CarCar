from django.urls import path

from .api_views import api_technician, api_list_appointments, api_show_appointment

urlpatterns = [

    path("technician/", api_technician, name="technician"),
    path("appointments/", api_list_appointments, name="appointments"),
    path("appointments/<int:id>/", api_show_appointment, name="appointment")
]