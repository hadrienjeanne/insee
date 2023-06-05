from django.db import models

# Create your models here.
class Name(models.Model):
    SEX_CHOICES = (
        ('1', 'Masculin'),
        ('2', 'Féminin'),
    )
    sex = models.CharField(max_length=8, choices=SEX_CHOICES)
    firstname = models.CharField(max_length=25)
    birthyear = models.CharField(max_length=4)
    quantity = models.IntegerField(max_length=8)