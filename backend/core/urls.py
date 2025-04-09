from django.urls import path, include
from rest_framework.routers import DefaultRouter
from core.views import CheckInViewSet, CustomUserViewSet, PhysicalSpaceViewSet, ReservationViewSet

router = DefaultRouter()
router.register(r'check-in', CheckInViewSet, basename='check-in')
router.register(r'user', CustomUserViewSet, basename='user')
router.register(r'pysical-space', PhysicalSpaceViewSet, basename='physical-space')
router.register(r'reservation', ReservationViewSet, basename='reservation')

urlpatterns = router.urls