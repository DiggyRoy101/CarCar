from django.urls import path

from .api_views import api_list_technician, api_list_appointments, api_show_appointment, api_show_technician

urlpatterns = [

    path("technician/", api_list_technician, name="technician"),
    path("appointments/", api_list_appointments, name="appointments"),
    path("appointments/<int:id>/", api_show_appointment, name="appointment"),
    path("technician/<int:id>/", api_show_technician, name="tech" )
]