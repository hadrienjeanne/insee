from rest_framework import serializers
from .models import Name

class NameSerializer(serializers.ModelSerializer):
    # user = serializers.PrimaryKeyRelatedField(
    #     read_only=True,
    #     default=serializers.CurrentUserDefault()
    # )
    sex = serializers.ChoiceField(choices=Name.SEX_CHOICES)

    class Meta:
        model = Name
        fields = ('id', 'sex', 'firstname', 'birthyear', 'quantity')