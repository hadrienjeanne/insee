from django.urls import path
from rest_framework import routers
from . import views

urlpatterns = [
    path("", views.index, name="index"),
]

router = routers.DefaultRouter()
router.register('api', views.NameViewSet, basename='names')

urlpatterns += router.urls