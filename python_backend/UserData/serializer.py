from rest_framework import serializers
from .models import *

class UserDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserDataModule
        fields = ['name','username','email','password','phonenumber',]

class UserLoggedInStateSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserLoggedInStateModule
        fields = ['user_status','username',]
        
class UserCardAccountsDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserCardAccountsDataModule
        fields = ['username','acc_name','acc_code','currency','bank_name','balance','description']

class UserBankAccountsDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserBankAccountsDataModule
        fields = ['username', 'acc_name', 'acc_code', 'currency', 'acc_num', 'bank_name', 'ifsc','balance', 'description']
        

class AccountSerializer(serializers.ModelSerializer):
    class Meta:
        model = (UserBankAccountsDataModule, UserCardAccountsDataModule)
        fields = ['acc_name', 'acc_code', 'currency', 'bank_name', 'balance', 'description']

class UserSalesOrderListSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserSalesOrderListModule
        fields = ["username","order_num","sale_date","product_name","product_quan","ship_date","product_cost"]
        
class UserPurchaseOrderListSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserPurchaseOrderListModule
        fields = ["username","purchase_num","purchase_date","product_name","product_quan","ship_date","product_cost"]