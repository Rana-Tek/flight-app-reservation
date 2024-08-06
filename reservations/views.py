from django.shortcuts import render
from rest_framework import viewsets
from .models import Flight, Reservation
from .serializers import FlightSerializer, ReservationSerializer

# Create your views here.

class FlightViewSet(viewsets.ModelViewSet):
    queryset = Flight.objects.all()
    serializer_class = FlightSerializer
    

class ReservationViewSet(viewsets.ModelViewSet):
    queryset = Reservation.objects.all()
    serializer_class = ReservationSerializer