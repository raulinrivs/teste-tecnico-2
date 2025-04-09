from core.models import CheckIn, CustomUser, PhysicalSpace, Reservation
from rest_framework import serializers


class CheckInSerializer(serializers.ModelSerializer):
    class Meta:
        model = CheckIn
        fields = '__all__'


class CustomUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = '__all__'


class PhysicalSpaceSerializer(serializers.ModelSerializer):
    class Meta:
        model = PhysicalSpace
        fields = '__all__'


class ReservationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reservation
        fields = '__all__'
