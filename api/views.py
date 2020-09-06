import requests
from rest_framework.response import Response
from django.shortcuts import render, redirect, HttpResponse
from rest_framework.decorators import api_view
from CardOye.serializers import CardSerializer, BankSerializer, OffersSerializer, AccountSerializer, Card, Bank,Account, Offers 

@api_view(['GET'])
def APIViews(request):
    APIURLS = [
    " / => APIHomepage",
    "GetAllOffers/ => Get All Offers",
    "GetBankCard/ => BANK FROM CARD",
    "BankList/ => ALL Banks",
    "BankCardList/ => CARDS FROM BANK",
    ]
    return Response(APIURLS)


def GetAllOffers(request):
    try:
        offers = Offers.objects.all()
        serializer = OffersSerializer(data = offers, many = True)
        serializer.is_valid()
        return Response(serializer.data, status = 200)
    except Exception as e:
        return Response(e , status = 400)

#ALL Banks
@api_view(['GET'])
def BankList(request):
    try:
        banklist = Bank.objects.all()
        serializer = BankSerializer(data = banklist, many = True)
        serializer.is_valid()
        return Response(serializer.data , status = 200)
    except Exception as e:
        return Response(e,status = 400)
#BANK FROM CARD
@api_view(['POST'])
def GetBankCard(request):
    card = request.data.get("name")
    bank = Card.objects.get(name__iexact = card).bank
    print(bank)
    return Response(status = 200)

#CARDS FROM BANK
@api_view(['POST'])
def BankCardList(request):
    bank = Bank.objects.get(name__iexact = request.data.get("Bank")).bank_id
    cardlist = Card.objects.filter(bank = bank)
    print(bank)
    print(cardlist)
    serializer = CardSerializer(data = cardlist,many = True)
    serializer.is_valid()
    return Response(serializer.data,status = 200)

@api_view(['POST'])
def CreateAccount(request):
    UserData = request.data
    serializer = AccountSerializer(data = UserData)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data,status = 200)
    else:
        return Response(serializer.errors,status= 401)