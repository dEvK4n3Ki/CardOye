"""CardOye URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path,include
from django.conf.urls import url
from . import views
from allauth.account.views import confirm_email
urlpatterns = [
    path('',views.APIViews,name = "API Homepage"),
    path('GetAllOffers/',views.GetAllOffers,name = "Get All Offers"),
    path('GetBankCard/',views.GetBankCard,name = "GetBankCard"),
    path('BankList/',views.BankList,name = "BankList"),
    path('BankCardList/',views.BankCardList,name = "BankCardList"),
    path('CreateAccount/',views.CreateAccount,name = "CreateAccount"),
    url(r'^rest-auth/', include('rest_auth.urls')),
    url(r'^rest-auth/registration/', include('rest_auth.registration.urls')),
    url(r'^account/', include('allauth.urls')),
    url(r'^accounts-rest/registration/account-confirm-email/(?P<key>.+)/$', confirm_email, name='account_confirm_email'),

]


