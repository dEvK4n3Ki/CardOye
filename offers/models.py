from django.db import models
from bank import models as bank
from card import models as card
from vendor import models as vendor
# Create your models here.
class Offers(models.Model):
    bank = models.ForeignKey(bank.Bank, verbose_name=("bank"), on_delete=models.CASCADE)
    card = models.ForeignKey(card.Card, verbose_name=("card"), on_delete=models.CASCADE)
    vendor = models.ForeignKey(vendor.Vendor, verbose_name=("vendor"), on_delete=models.CASCADE)
    descriptor = models.CharField(max_length=100,null = True)
    offer_body = models.TextField()
    link = models.URLField(max_length=200, blank = True,null = True)
    discount = models.BooleanField(default = False,null = True)
    cashback = models.BooleanField(default = False,null = True)
    value = models.CharField(max_length=50,null = True)
    mintransact = models.IntegerField(null = True)
    maxben = models.IntegerField(null = True)
    start = models.DateTimeField( auto_now=False, auto_now_add=False,null = True)
    expiry = models.DateTimeField( auto_now=False, auto_now_add=False,null = True)
    ccdc = models.CharField(max_length=3,null = True)
    code = models.CharField(max_length=50,blank=True,null = True)
    link = models.URLField(max_length=300, blank=True,null = True)
    tags = models.JSONField(blank = True,null = True)
    trending = models.BooleanField(default = False,null = True)
    logo = models.ImageField(upload_to="media", height_field=None, width_field=None, max_length=None,blank = True,null = True)
    criteria = models.JSONField(blank = True,null = True)
    tnc = models.URLField(max_length=200,blank=True, null=True) 


    def __str__(self):
        return self.descriptor    