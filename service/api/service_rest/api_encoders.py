from common.json import ModelEncoder
from .models import AutomobileVO, Technician, Appointments


class AutomobileVOEncoder(ModelEncoder):
    model = AutomobileVO
    properties = [
        "import_href",
        "vin",
    ]


class TechnicianEncoder(ModelEncoder):
    model = Technician
    properties = ["name", "employee_no", "id"]


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
        "completion",
        "id",
    ]
    encoders = {
        "vehicle": AutomobileVOEncoder(),
        "technician": TechnicianEncoder(),
    }
