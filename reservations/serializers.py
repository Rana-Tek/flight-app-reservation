from rest_framework import serializers
from .models import Flight, Reservation

class ReservationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reservation
        fields = '__all__'
        
class FlightSerializer(serializers.ModelSerializer):
    reservations = ReservationSerializer(many=True, read_only=True)
    
    class Meta:
        model = Flight
        fields = '__all__'
        
