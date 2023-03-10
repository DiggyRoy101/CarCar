from .models import SalesPerson, Customer, AutomobileVO, SalesRecord
from common.json import ModelEncoder


class SalesPersonListEncoder(ModelEncoder):
    model = SalesPerson
    properties = [
        "id",
        "name",
        "employee_number",
    ]


class CustomerListEncoder(ModelEncoder):
    model = Customer
    properties = [
        "id",
        "name",
        "address",
        "phone",
    ]


class AutomobileVOEncoder(ModelEncoder):
    model = AutomobileVO
    properties = [
        "id",
        "vin",
        "import_href",
        "sold",
    ]


class SalesListEncoder(ModelEncoder):
    model = SalesRecord
    properties = [
        "id",
        "automobile",
        "sales_person",
        "customer",
        "price",
    ]
    encoders = {
        "automobile": AutomobileVOEncoder(),
        "sales_person": SalesPersonListEncoder(),
        "customer": CustomerListEncoder(),
    }
