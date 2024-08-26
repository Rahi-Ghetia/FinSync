from django.db import models

# Create your models here.

class UserDataModule(models.Model):
    name = models.CharField(max_length=30)
    username = models.CharField(max_length=30)
    email = models.CharField(max_length=30,default='')
    password = models.CharField(max_length=30)
    phonenumber = models.CharField(max_length=10,default='')
    city = models.CharField(max_length=100,default='')
    
class UserLoggedInStateModule(models.Model):
    user_status = models.BooleanField(default=False)
    username = models.CharField(max_length=30)
    
class UserBankAccountsDataModule(models.Model):
    username = models.CharField(max_length=30)
    acc_name = models.CharField(max_length=30)
    acc_code = models.CharField(max_length=30)
    currency = models.CharField(max_length=30)
    acc_num = models.CharField(max_length=30)
    bank_name = models.CharField(max_length=30)
    ifsc = models.CharField(max_length=30)
    balance = models.FloatField(max_length=30,default=0.0)
    description = models.CharField(max_length=500)
    
class UserCardAccountsDataModule(models.Model):
    username = models.CharField(max_length=30)
    acc_name = models.CharField(max_length=30)
    acc_code = models.CharField(max_length=30)
    currency = models.CharField(max_length=30)
    bank_name = models.CharField(max_length=30)
    balance = models.FloatField(max_length=30,default=0.0)
    description = models.CharField(max_length=500)
    
class UserSalesOrderListModule(models.Model):
    username = models.CharField(max_length=30)
    order_num = models.CharField(max_length=30)
    sale_date = models.DateField()
    product_name = models.CharField(max_length=50)
    product_quan = models.FloatField()
    ship_date = models.DateField()
    product_cost = models.FloatField()
    
class UserPurchaseOrderListModule(models.Model):
    username = models.CharField(max_length=30)
    purchase_num = models.CharField(max_length=30)
    purchase_date = models.DateField()
    product_name = models.CharField(max_length=50)
    product_quan = models.FloatField()
    ship_date = models.DateField()
    product_cost = models.FloatField()