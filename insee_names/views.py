from django.shortcuts import render
from django.http import HttpResponse
# from django.contrib.auth.decorators import login_required
# from django.utils.decorators import method_decorator
# from django.views.generic import TemplateView
from django.template import loader

from insee_names.models import Name

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
    print(template.origin.name)
    return HttpResponse(template.render(context, request))

# # make sure this view is only accessible on login
# @method_decorator(login_required, name='dispatch')
# class NameView(TemplateView):
#     # our hybrid template, shown above
#     template_name = 'insee_names/index.html'

#     def get_context_data(self, **kwargs):
#         # passing the department choices to the template in the context
#         return {
#             'sex_choices': [{
#                 'id': c[0],
#                 'name': c[1]
#             } for c in Name.SEX_CHOICE],
#         }