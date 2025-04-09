from core.serializers import CheckInSerializer, CustomUserSerializer, PhysicalSpaceSerializer, ReservationSerializer
from core.models import CheckIn, CustomUser, PhysicalSpace, Reservation

from rest_framework import viewsets, permissions, status
from rest_framework.decorators import action
from rest_framework.response import Response


class CheckInViewSet(viewsets.ModelViewSet):
    queryset = CheckIn.objects.all()
    serializer_class = CheckInSerializer


class CustomUserViewSet(viewsets.ModelViewSet):
    queryset = CustomUser.objects.all()
    serializer_class = CustomUserSerializer


class PhysicalSpaceViewSet(viewsets.ModelViewSet):
    queryset = PhysicalSpace.objects.all()
    serializer_class = PhysicalSpaceSerializer


class ReservationViewSet(viewsets.ModelViewSet):
    queryset = Reservation.objects.all()
    serializer_class = ReservationSerializer
