from django.shortcuts import render
from django.http import HttpResponse
# from django.contrib.auth.decorators import login_required
# from django.utils.decorators import method_decorator
# from django.views.generic import TemplateView
from django.shortcuts import get_object_or_404
from django.template import loader
from rest_framework import viewsets
from rest_framework.response import Response

from .models import Name
from .serializers import NameSerializer

# Create your views here.
def index(request):
    # return HttpResponse("Hello, world. You're at the names stats index through insee_names app.")
    template = loader.get_template("insee_names/index.html")
    context = {
        'sex_choices': [{
            'id': c[0],
            'name': c[1]
        } for c in Name.SEX_CHOICES],
    }
    return HttpResponse(template.render(context, request))

class NameViewSet(viewsets.ModelViewSet):
    serializer_class = NameSerializer

    def list(self, request):
        queryset = Name.objects.all()
        serializer = NameSerializer()
        return Response(serializer.data)

    def retrieve(self, request, pk=None):
        queryset = Name.objects.all()
        user = get_object_or_404(queryset, pk=pk)
        serializer = NameSerializer()
        return Response(serializer.data)
