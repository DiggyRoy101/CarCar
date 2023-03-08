from django.db import models
from django.urls import reverse
# Create your models here.
class ManufacturerVO(models.Model):
    import_href = models.CharField(max_length=200, unique=True)
    name = models.CharField(max_length=100, unique=True)

    def get_api_url(self):
        return reverse("api_manufacturer", kwargs={"pk": self.id})
class VehicleModelVO(models.Model):
    import_href = models.CharField(max_length=200, unique=True)
    name = models.CharField(max_length=100)
    picture_url = models.URLField()

    manufacturer = models.ForeignKey(
        ManufacturerVO,
        related_name="models",
        on_delete=models.CASCADE,
    )
    def get_api_url(self):
        return reverse("api_vehicle_model", kwargs={"pk": self.id})
        
class AutomobileVO(models.Model):
    import_href = models.CharField(max_length=200, unique=True)
    vin = models.CharField(max_length=17, unique=True)

class Technician(models.Model):
    name = models.CharField(max_length=50)
    employee_no = models.PositiveSmallIntegerField()

class Appointments(models.Model):
    vehicle = models.ForeignKey(
        AutomobileVO,
        related_name="vehicle",
        on_delete=models.CASCADE,
        default=None
    )
    customer_name=models.CharField(max_length=50)
    date=models.CharField(max_length=50)
    time=models.CharField(max_length=50)
    technician= models.ForeignKey(
        Technician,
        related_name="technician",
        on_delete=models.CASCADE,
    )
    reason=models.CharField(max_length=200)
    
    def __str__(self):
        return self.name
    




