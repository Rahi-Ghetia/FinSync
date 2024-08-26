from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework import generics,status
from rest_framework.views import APIView
from .serializer import *
from .models import *
from .functions import *

class UserDataView(generics.ListCreateAPIView):
    queryset = UserDataModule.objects.all()
    serializer_class = UserDataSerializer
    
class UserLoggedInStateView(generics.ListCreateAPIView):
    queryset = UserLoggedInStateModule.objects.all()
    serializer_class = UserLoggedInStateSerializer
    
    def post(self, request):
        user_status = request.data.get('user_status')
        username = request.data.get('username')
        user_data = UserLoggedInStateModule.objects.all()
        user_data.delete()
        user_data,created = UserLoggedInStateModule.objects.get_or_create(username=username)
        user_data.user_status = user_status
        user_data.save()
        return Response(user_data.data, status=status.HTTP_201_CREATED)
    
class GetUserProfileDataView(generics.ListCreateAPIView):
    queryset = UserDataModule.objects.all()
    serializer_class = UserDataSerializer
    
    def post(self, request):
        username = request.data.get('username')
        user_data = UserLoggedInStateModule.objects.filter(username=username)
        return Response({"name":user_data.name,"email":user_data.email,"phonenumber":user_data.phonenumber,"city":user_data.city}, status=status.HTTP_201_CREATED)

class CheckDataPresenceView(APIView):
    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')
        data_present = check_data_presence(username, password)
        user_data = UserLoggedInStateModule.objects.all()
        user_data.delete()
        user_data, created = UserLoggedInStateModule.objects.get_or_create(username=username)
        user_data.user_status = data_present
        user_data.save()
        return Response({'data_present': data_present}, status=status.HTTP_200_OK)
        
    def get(self, request):
        username = request.data.get('username')
        password = request.data.get('password')
        data_present = check_data_presence(username, password)
        return Response({'data_present': data_present}, status=status.HTTP_200_OK)

class UserCardAccountsDataView(generics.ListCreateAPIView):
    queryset = UserCardAccountsDataModule.objects.all()
    serializer_class = UserCardAccountsDataSerializer
    
    def post(self, request):
        serializer = self.get_serializer(data=request.data)

        if not serializer.is_valid():
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        try:
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        except Exception as e:
            print(f"An error occurred: {e}")
            return Response({'error': 'An unexpected error occurred.'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        
    def get_queryset(self):
        return UserCardAccountsDataModule.objects.all()


class UserBankAccountsDataView(generics.ListCreateAPIView):
    queryset = UserBankAccountsDataModule.objects.all()  # Existing code
    serializer_class = UserBankAccountsDataSerializer
    
    def post(self, request):
        serializer = self.get_serializer(data=request.data)

        if not serializer.is_valid():
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        try:
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        except Exception as e:
            print(f"An error occurred: {e}")
            return Response({'error': 'An unexpected error occurred.'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        
class GetUserAccountData(APIView):
    
    def post(self,request):
        username = request.data.get('username')
        # UserBankAccountsDataModule.objects.all().delete()
        # UserCardAccountsDataModule.objects.all().delete()
        user_dataB = UserBankAccountsDataModule.objects.filter(username=username)
        user_dataC = UserCardAccountsDataModule.objects.filter(username=username)
        
        combined_data = []
        for account in user_dataB:
            combined_item = {
                'acc_name': account.acc_name,
                'acc_code': account.acc_code,
                'currency': account.currency,
                'bank_name': account.bank_name,
                'balance': account.balance,
                'description': account.description,
                'acc_type': 'Bank'
            }
            combined_data.append(combined_item)

        for account in user_dataC:
            combined_item = {
                'acc_name': account.acc_name,
                'acc_code': account.acc_code,
                'currency': account.currency,
                'bank_name': account.bank_name,
                'balance': account.balance,
                'description': account.description,
                'acc_type': 'Card'
            }
            combined_data.append(combined_item)
        return Response(combined_data,status=status.HTTP_200_OK)
    
    def get(self,request):
        user_dataB = UserBankAccountsDataModule.objects.filter(username='Rahi')
        user_dataC = UserCardAccountsDataModule.objects.filter(username='Rahi')
        
        return Response([({'acc_name':account.acc_name, 'acc_code':account.acc_code, 'currency':account.currency, 'bank_name':account.bank_name,
                           'balance':account.balance, 'description':account.description,'acc_type': 'Bank'} for account in user_dataB),({'acc_name':account.acc_name, 'acc_code':account.acc_code, 
                            'currency':account.currency, 'bank_name':account.bank_name,'balance':account.balance, 'description':account.description,'acc_type': 'Card'} 
                                for account in user_dataC)],status=status.HTTP_200_OK)
        
class UserSalesOrderListView(generics.ListCreateAPIView):
    queryset = UserSalesOrderListModule.objects.all()  # Existing code
    serializer_class = UserSalesOrderListSerializer
    
    def post(self, request):
        serializer = self.get_serializer(data=request.data)

        if not serializer.is_valid():
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
        try:
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        except Exception as e:
            print(f"An error occurred: {e}")
            return Response({'error': 'An unexpected error occurred.'}, status=status.HTTP_200_OK)
        
class SendUserSalesOrderListView(APIView):
    def post(self,request):
        username = request.data.get('username')
        # UserSalesOrderListModule.objects.all().delete()
        user_dataSalesData = UserSalesOrderListModule.objects.filter(username=username)
        sales_data = []
        for saleItem in user_dataSalesData:
            sales_data.append({"order_num": saleItem.order_num, "sale_date": saleItem.sale_date, "product_name": saleItem.product_name, "product_quan": saleItem.product_quan, "ship_date": saleItem.ship_date, "product_cost": saleItem.product_cost })
        return Response(sales_data,status=status.HTTP_200_OK)
    
    def get(self,request):
        user_dataSalesData = UserSalesOrderListModule.objects.all()
        return Response([{"order_num": saleItem.order_num, "sale_date": saleItem.sale_date, "product_name": saleItem.product_name, "product_quan": saleItem.product_quan, "ship_date": saleItem.ship_date, "product_cost": saleItem.product_cost } for saleItem in user_dataSalesData],status=status.HTTP_200_OK)

class UserPurchaseOrderListView(generics.ListCreateAPIView):
    queryset = UserPurchaseOrderListModule.objects.all()
    serializer_class = UserPurchaseOrderListSerializer
    
    def post(self, request):
        serializer = self.get_serializer(data=request.data)

        if not serializer.is_valid():
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
        try:
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        except Exception as e:
            print(f"An error occurred: {e}")
            return Response({'error': 'An unexpected error occurred.'}, status=status.HTTP_200_OK)
        
class SendUserPurchaseOrderListView(APIView):
    def post(self,request):
        username = request.data.get('username')
        # UserPurchaseOrderListModule.objects.all().delete()
        user_dataSalesData = UserPurchaseOrderListModule.objects.filter(username=username)
        sales_data = []
        for saleItem in user_dataSalesData:
            sales_data.append({"purchase_num": saleItem.purchase_num, "purchase_date": saleItem.purchase_date, "product_name": saleItem.product_name, "product_quan": saleItem.product_quan, "ship_date": saleItem.ship_date, "product_cost": saleItem.product_cost })
        return Response(sales_data,status=status.HTTP_200_OK)
    
    def get(self,request):
        user_dataSalesData = UserPurchaseOrderListModule.objects.all()
        return Response([{"purchase_num": saleItem.purchase_num, "purchase_date": saleItem.purchase_date, "product_name": saleItem.product_name, "product_quan": saleItem.product_quan, "ship_date": saleItem.ship_date, "product_cost": saleItem.product_cost } for saleItem in user_dataSalesData],status=status.HTTP_200_OK)


class DelteFromUserSalesList(APIView):
    def post(self,request):
        username = request.data.get('username')
        order_num = request.data.get('order_num')
        sale_date = request.data.get('sale_date')
        product_name = request.data.get('product_name')
        product_quan = request.data.get('product_quan')
        response = deleteSalesData(username,order_num,sale_date,product_name,product_quan)
        return Response({"response":response},status=status.HTTP_202_ACCEPTED)

class DelteFromUserPurchaseList(APIView):
    def post(self,request):
        username = request.data.get('username')
        purchase_num = request.data.get('purchase_num')
        purchase_date = request.data.get('purchase_date')
        product_name = request.data.get('product_name')
        product_quan = request.data.get('product_quan')
        response = deletePurchaseData(username,purchase_num,purchase_date,product_name,product_quan)
        return Response({"response":response},status=status.HTTP_202_ACCEPTED)
    
class SortSaleDataTotalLHWise(APIView):
    def post(self,request):
        username = request.data.get('username')
        dataVal = sortSaleTotalLHWise(username)
        return Response([{"order_num": saleItem.order_num, "sale_date": saleItem.sale_date, "product_name": saleItem.product_name, "product_quan": saleItem.product_quan, "ship_date": saleItem.ship_date, "product_cost": saleItem.product_cost } for saleItem in dataVal],status=status.HTTP_202_ACCEPTED)
    def get(self,request):
        username = request.data.get('username')
        dataVal = sortSaleTotalLHWise(username)
        return Response([{"order_num": saleItem.order_num, "sale_date": saleItem.sale_date, "product_name": saleItem.product_name, "product_quan": saleItem.product_quan, "ship_date": saleItem.ship_date, "product_cost": saleItem.product_cost } for saleItem in dataVal],status=status.HTTP_202_ACCEPTED)

class SortSaleDataTotalHLWise(APIView):
    def post(self,request):
        username = request.data.get('username')
        dataVal = sortSaleTotalHLWise(username)
        return Response([{"order_num": saleItem.order_num, "sale_date": saleItem.sale_date, "product_name": saleItem.product_name, "product_quan": saleItem.product_quan, "ship_date": saleItem.ship_date, "product_cost": saleItem.product_cost } for saleItem in dataVal],status=status.HTTP_202_ACCEPTED)
    def get(self,request):
        username = request.data.get('username')
        dataVal = sortSaleTotalHLWise(username)
        return Response([{"order_num": saleItem.order_num, "sale_date": saleItem.sale_date, "product_name": saleItem.product_name, "product_quan": saleItem.product_quan, "ship_date": saleItem.ship_date, "product_cost": saleItem.product_cost } for saleItem in dataVal],status=status.HTTP_202_ACCEPTED)
    
class SortSaleDataQuantityLHWise(APIView):
    def post(self,request):
        username = request.data.get('username')
        dataVal = sortSaleQuantityLHWise(username)
        return Response([{"order_num": saleItem.order_num, "sale_date": saleItem.sale_date, "product_name": saleItem.product_name, "product_quan": saleItem.product_quan, "ship_date": saleItem.ship_date, "product_cost": saleItem.product_cost } for saleItem in dataVal],status=status.HTTP_202_ACCEPTED)
    def get(self,request):
        username = request.data.get('username')
        dataVal = sortSaleQuantityLHWise(username)
        return Response([{"order_num": saleItem.order_num, "sale_date": saleItem.sale_date, "product_name": saleItem.product_name, "product_quan": saleItem.product_quan, "ship_date": saleItem.ship_date, "product_cost": saleItem.product_cost } for saleItem in dataVal],status=status.HTTP_202_ACCEPTED)

class SortSaleDataQuantityHLWise(APIView):
    def post(self,request):
        username = request.data.get('username')
        dataVal = sortSaleQuantityHLWise(username)
        return Response([{"order_num": saleItem.order_num, "sale_date": saleItem.sale_date, "product_name": saleItem.product_name, "product_quan": saleItem.product_quan, "ship_date": saleItem.ship_date, "product_cost": saleItem.product_cost } for saleItem in dataVal],status=status.HTTP_202_ACCEPTED)
    def get(self,request):
        username = request.data.get('username')
        dataVal = sortSaleQuantityHLWise(username)
        return Response([{"order_num": saleItem.order_num, "sale_date": saleItem.sale_date, "product_name": saleItem.product_name, "product_quan": saleItem.product_quan, "ship_date": saleItem.ship_date, "product_cost": saleItem.product_cost } for saleItem in dataVal],status=status.HTTP_202_ACCEPTED)
    
class SortSaleDataDateLHWise(APIView):
    def post(self,request):
        username = request.data.get('username')
        dataVal = sortSaleDateLHWise(username)
        return Response([{"order_num": saleItem.order_num, "sale_date": saleItem.sale_date, "product_name": saleItem.product_name, "product_quan": saleItem.product_quan, "ship_date": saleItem.ship_date, "product_cost": saleItem.product_cost } for saleItem in dataVal],status=status.HTTP_202_ACCEPTED)
    def get(self,request):
        username = request.data.get('username')
        dataVal = sortSaleDateLHWise(username)
        return Response([{"order_num": saleItem.order_num, "sale_date": saleItem.sale_date, "product_name": saleItem.product_name, "product_quan": saleItem.product_quan, "ship_date": saleItem.ship_date, "product_cost": saleItem.product_cost } for saleItem in dataVal],status=status.HTTP_202_ACCEPTED)

class SortSaleDataDateHLWise(APIView):
    def post(self,request):
        username = request.data.get('username')
        dataVal = sortSaleDateHLWise(username)
        return Response([{"order_num": saleItem.order_num, "sale_date": saleItem.sale_date, "product_name": saleItem.product_name, "product_quan": saleItem.product_quan, "ship_date": saleItem.ship_date, "product_cost": saleItem.product_cost } for saleItem in dataVal],status=status.HTTP_202_ACCEPTED)
    def get(self,request):
        username = request.data.get('username')
        dataVal = sortSaleDateHLWise(username)
        return Response([{"order_num": saleItem.order_num, "sale_date": saleItem.sale_date, "product_name": saleItem.product_name, "product_quan": saleItem.product_quan, "ship_date": saleItem.ship_date, "product_cost": saleItem.product_cost } for saleItem in dataVal],status=status.HTTP_202_ACCEPTED)

class SortPurchaseDataTotalLHWise(APIView):
    def post(self,request):
        username = request.data.get('username')
        dataVal = sortPurchaseTotalLHWise(username)
        return Response([{"purchase_num": purchaseItem.purchase_num, "purchase_date": purchaseItem.purchase_date, "product_name": purchaseItem.product_name, "product_quan": purchaseItem.product_quan, "ship_date": purchaseItem.ship_date, "product_cost": purchaseItem.product_cost } for purchaseItem in dataVal],status=status.HTTP_202_ACCEPTED)
    def get(self,request):
        username = request.data.get('username')
        dataVal = sortPurchaseTotalLHWise(username)
        return Response([{"purchase_num": purchaseItem.purchase_num, "purchase_date": purchaseItem.purchase_date, "product_name": purchaseItem.product_name, "product_quan": purchaseItem.product_quan, "ship_date": purchaseItem.ship_date, "product_cost": purchaseItem.product_cost } for purchaseItem in dataVal],status=status.HTTP_202_ACCEPTED)

class SortPurchaseDataTotalHLWise(APIView):
    def post(self,request):
        username = request.data.get('username')
        dataVal = sortPurchaseTotalHLWise(username)
        return Response([{"purchase_num": purchaseItem.purchase_num, "purchase_date": purchaseItem.purchase_date, "product_name": purchaseItem.product_name, "product_quan": purchaseItem.product_quan, "ship_date": purchaseItem.ship_date, "product_cost": purchaseItem.product_cost } for purchaseItem in dataVal],status=status.HTTP_202_ACCEPTED)
    def get(self,request):
        username = request.data.get('username')
        dataVal = sortPurchaseTotalHLWise(username)
        return Response([{"purchase_num": purchaseItem.purchase_num, "purchase_date": purchaseItem.purchase_date, "product_name": purchaseItem.product_name, "product_quan": purchaseItem.product_quan, "ship_date": purchaseItem.ship_date, "product_cost": purchaseItem.product_cost } for purchaseItem in dataVal],status=status.HTTP_202_ACCEPTED)
    
class SortPurchaseDataQuantityLHWise(APIView):
    def post(self,request):
        username = request.data.get('username')
        dataVal = sortPurchaseQuantityLHWise(username)
        return Response([{"purchase_num": purchaseItem.purchase_num, "purchase_date": purchaseItem.purchase_date, "product_name": purchaseItem.product_name, "product_quan": purchaseItem.product_quan, "ship_date": purchaseItem.ship_date, "product_cost": purchaseItem.product_cost } for purchaseItem in dataVal],status=status.HTTP_202_ACCEPTED)
    def get(self,request):
        username = request.data.get('username')
        dataVal = sortPurchaseQuantityLHWise(username)
        return Response([{"purchase_num": purchaseItem.purchase_num, "purchase_date": purchaseItem.purchase_date, "product_name": purchaseItem.product_name, "product_quan": purchaseItem.product_quan, "ship_date": purchaseItem.ship_date, "product_cost": purchaseItem.product_cost } for purchaseItem in dataVal],status=status.HTTP_202_ACCEPTED)

class SortPurchaseDataQuantityHLWise(APIView):
    def post(self,request):
        username = request.data.get('username')
        dataVal = sortPurchaseQuantityHLWise(username)
        return Response([{"purchase_num": purchaseItem.purchase_num, "purchase_date": purchaseItem.purchase_date, "product_name": purchaseItem.product_name, "product_quan": purchaseItem.product_quan, "ship_date": purchaseItem.ship_date, "product_cost": purchaseItem.product_cost } for purchaseItem in dataVal],status=status.HTTP_202_ACCEPTED)
    def get(self,request):
        username = request.data.get('username')
        dataVal = sortPurchaseQuantityHLWise(username)
        return Response([{"purchase_num": purchaseItem.purchase_num, "purchase_date": purchaseItem.purchase_date, "product_name": purchaseItem.product_name, "product_quan": purchaseItem.product_quan, "ship_date": purchaseItem.ship_date, "product_cost": purchaseItem.product_cost } for purchaseItem in dataVal],status=status.HTTP_202_ACCEPTED)
    
class SortPurchaseDataDateLHWise(APIView):
    def post(self,request):
        username = request.data.get('username')
        dataVal = sortPurchaseDateLHWise(username)
        return Response([{"purchase_num": purchaseItem.purchase_num, "purchase_date": purchaseItem.purchase_date, "product_name": purchaseItem.product_name, "product_quan": purchaseItem.product_quan, "ship_date": purchaseItem.ship_date, "product_cost": purchaseItem.product_cost } for purchaseItem in dataVal],status=status.HTTP_202_ACCEPTED)
    def get(self,request):
        username = request.data.get('username')
        dataVal = sortPurchaseDateLHWise(username)
        return Response([{"purchase_num": purchaseItem.purchase_num, "purchase_date": purchaseItem.purchase_date, "product_name": purchaseItem.product_name, "product_quan": purchaseItem.product_quan, "ship_date": purchaseItem.ship_date, "product_cost": purchaseItem.product_cost } for purchaseItem in dataVal],status=status.HTTP_202_ACCEPTED)

class SortPurchaseDataDateHLWise(APIView):
    def post(self,request):
        username = request.data.get('username')
        dataVal = sortPurchaseDateHLWise(username)
        return Response([{"purchase_num": purchaseItem.purchase_num, "purchase_date": purchaseItem.purchase_date, "product_name": purchaseItem.product_name, "product_quan": purchaseItem.product_quan, "ship_date": purchaseItem.ship_date, "product_cost": purchaseItem.product_cost } for purchaseItem in dataVal],status=status.HTTP_202_ACCEPTED)
    def get(self,request):
        username = request.data.get('username')
        dataVal = sortPurchaseDateHLWise(username)
        return Response([{"purchase_num": purchaseItem.purchase_num, "purchase_date": purchaseItem.purchase_date, "product_name": purchaseItem.product_name, "product_quan": purchaseItem.product_quan, "ship_date": purchaseItem.ship_date, "product_cost": purchaseItem.product_cost } for purchaseItem in dataVal],status=status.HTTP_202_ACCEPTED)
    
    
class SearchPurchaseListData(APIView):
    def post(self,request):
        username = request.data.get('username')
        user_input = request.data.get('user_input')
        dataVal = searchDataFromPurchaseList(username,str(user_input).lower())
        return Response([{"purchase_num": purchaseItem.purchase_num, "purchase_date": purchaseItem.purchase_date, "product_name": purchaseItem.product_name, "product_quan": purchaseItem.product_quan, "ship_date": purchaseItem.ship_date, "product_cost": purchaseItem.product_cost } for purchaseItem in dataVal],status=status.HTTP_202_ACCEPTED)
    def get(self,request):
        username = request.data.get('username')
        user_input = request.data.get('user_input')
        dataVal = searchDataFromPurchaseList(username,str(user_input).lower())
        return Response([{"purchase_num": purchaseItem.purchase_num, "purchase_date": purchaseItem.purchase_date, "product_name": purchaseItem.product_name, "product_quan": purchaseItem.product_quan, "ship_date": purchaseItem.ship_date, "product_cost": purchaseItem.product_cost } for purchaseItem in dataVal],status=status.HTTP_202_ACCEPTED)

class SearchSaleListData(APIView):
    def post(self,request):
        username = request.data.get('username')
        user_input = request.data.get('user_input')
        dataVal = searchDataFromSaleList(username,str(user_input).lower())
        return Response([{"order_num": purchaseItem.order_num, "sale_date": purchaseItem.sale_date, "product_name": purchaseItem.product_name, "product_quan": purchaseItem.product_quan, "ship_date": purchaseItem.ship_date, "product_cost": purchaseItem.product_cost } for purchaseItem in dataVal],status=status.HTTP_202_ACCEPTED)
    def get(self,request):
        username = request.data.get('username')
        user_input = request.data.get('user_input')
        dataVal = searchDataFromSaleList(username,str(user_input).lower())
        return Response([{"order_num": purchaseItem.order_num, "sale_date": purchaseItem.sale_date, "product_name": purchaseItem.product_name, "product_quan": purchaseItem.product_quan, "ship_date": purchaseItem.ship_date, "product_cost": purchaseItem.product_cost } for purchaseItem in dataVal],status=status.HTTP_202_ACCEPTED)

class SearchAccountListData(APIView):
    def post(self,request):
        username = request.data.get('username')
        user_input = request.data.get('user_input')
        dataVal = searchDataFromAccountList(username,str(user_input).lower())
        return Response([({'acc_name':account.acc_name, 'acc_code':account.acc_code, 'currency':account.currency, 'bank_name':account.bank_name,
                           'balance':account.balance, 'description':account.description,'acc_type': 'Bank'} for account in dataVal[0]),({'acc_name':account.acc_name, 'acc_code':account.acc_code, 
                            'currency':account.currency, 'bank_name':account.bank_name,'balance':account.balance, 'description':account.description,'acc_type': 'Card'} 
                                for account in dataVal[1])],status=status.HTTP_200_OK)
    def get(self,request):
        username = request.data.get('username')
        user_input = request.data.get('user_input')
        dataVal = searchDataFromAccountList(username,str(user_input).lower())
        return Response([({'acc_name':account.acc_name, 'acc_code':account.acc_code, 'currency':account.currency, 'bank_name':account.bank_name,
                           'balance':account.balance, 'description':account.description,'acc_type': 'Bank'} for account in dataVal[0]),({'acc_name':account.acc_name, 'acc_code':account.acc_code, 
                            'currency':account.currency, 'bank_name':account.bank_name,'balance':account.balance, 'description':account.description,'acc_type': 'Card'} 
                                for account in dataVal[1])],status=status.HTTP_200_OK)

class GenerateRevenueByDate(APIView):
    def post(self,request):
        username = request.data.get('username')
        dataVal = generateRevenue(username)
        print(dataVal)
        # return Response({'Date':'date'},status=status.HTTP_202_ACCEPTED)
        return Response([{'date':date,'spent':value} for (date,value) in dataVal.items()],status=status.HTTP_202_ACCEPTED)
    def get(self,request):
        dataVal = generateRevenue('Rahi')
        # return Response({'Date':'date'},status=status.HTTP_202_ACCEPTED)
        return Response([{'date':date,'spent':value} for (date,value) in dataVal.items()],status=status.HTTP_202_ACCEPTED)