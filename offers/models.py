from django.db import models
from bank import models as bank
from card import models as card
# Create your models here.
class Offers(models.Model):
    bank = models.ForeignKey(bank.Bank, verbose_name=("bank"), on_delete=models.CASCADE)
    card = models.ForeignKey(card.Card, verbose_name=("card"), on_delete=models.CASCADE)
    descriptor = models.CharField(max_length=100)
    offer_body = models.CharField(max_length=5000)
    link = models.URLField(max_length=200, blank = True)



    def __str__(self):
        return self.descriptor    