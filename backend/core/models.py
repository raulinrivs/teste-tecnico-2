from django.db import models
from authentication.models import CustomUser


class PhysicalSpace(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField(blank=True)
    capacity = models.PositiveIntegerField(default=1)


class Reservation(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    space = models.ForeignKey(PhysicalSpace, on_delete=models.CASCADE)
    date = models.DateField()
    start_time = models.TimeField()
    end_time = models.TimeField()
    cancelled = models.BooleanField(default=False)
    checked_in = models.BooleanField(default=False)


class CheckIn(models.Model):
    reservation = models.OneToOneField(Reservation, on_delete=models.CASCADE)
    timestamp = models.DateTimeField(auto_now_add=True)
