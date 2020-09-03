from django.db import models
from bank.models import Bank
# Create your models here.
class Card(models.Model):
    card_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50)
    bank = models.ForeignKey(Bank, verbose_name=("bank"), on_delete=models.CASCADE)
    tier = models.IntegerField(default=5)
    credit = models.BooleanField(default = False)
    debit = models.BooleanField(default=False)
    card_image = models.ImageField(blank = True,upload_to='static', height_field=None, width_field=None, max_length=None)
    
    
    def __str__(self):
        return self.name
    