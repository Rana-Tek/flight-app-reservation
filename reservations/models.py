from django.db import models

# Create your models here.

class Flight(models.Model):
    flight_number = models.CharField(max_length=10)
    departure = models.CharField(max_length=100)
    destination = models.CharField(max_length=100)
    departure_time = models.DateTimeField()
    arrival_time = models.DateTimeField()
    
    def __str__(self):
        return self.flight_number
    

class Reservation(models.Model):
    flight = models.ForeignKey(Flight, related_name='reservations', on_delete=models.CASCADE)
    passenger_name = models.CharField(max_length=100)
    passenger_email = models.EmailField()
    passenger_phone = models.CharField(max_length=15)
    
    def __str__(self):
        return f'{self.passenger_name} - {self.flight.flight_number}'