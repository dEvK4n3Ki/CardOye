from django.db import models
from bank.models import Bank
# Create your models here.
class Card(models.Model):
    card_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50)
    bank = models.ForeignKey(Bank, verbose_name=("bank"), on_delete=models.CASCADE)