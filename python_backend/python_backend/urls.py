from django.contrib import admin
from django.urls import path,include
from UserData.views import *

urlpatterns = [
    path('admin/', admin.site.urls),
    
    path('',UserDataView.as_view(),name='UserData'),
    path('checkUser/',CheckDataPresenceView.as_view(),name='UserVerification'),
    path('userStatus/',UserLoggedInStateView.as_view(),name='UserStatus'),
    
    # For Accounts
    path('setBankAccount/',UserBankAccountsDataView.as_view(),name='Bank'),
    path('setCardAccount/',UserCardAccountsDataView.as_view(),name='Card'),
    path('getAccountData/',GetUserAccountData.as_view(),name='UserAccData'),
    path('searchAccListData/',SearchAccountListData.as_view(),name='SearchAccListData'),
    
    path('generateRevenueByDate/',GenerateRevenueByDate.as_view(),name='GenerateRevenueByDate'),
    
    path('getUserProfileData/',GetUserProfileDataView.as_view(),name='UserProfileView'),
    
    path('slaesOrderList/',UserSalesOrderListView.as_view(),name='UserSalesData'),
    path('getSlaesOrderList/',SendUserSalesOrderListView.as_view(),name='SendSlaesOrder'),
    path('deleteUserSaleData/',DelteFromUserSalesList.as_view(),name='DeleteSaleData'),
    path('searchSaleListData/',SearchSaleListData.as_view(),name='SearchSaleListData'),
    # For Sorting
    path('sortSaleDataDateLHWise/',SortSaleDataDateLHWise.as_view(),name='SortSaleDateLH'),
    path('sortSaleDataDateHLWise/',SortSaleDataDateHLWise.as_view(),name='SortSaleDateHL'),
    path('sortSaleDataQuantityLHWise/',SortSaleDataQuantityLHWise.as_view(),name='SortSaleQuanLH'),
    path('sortSaleDataQuantityHLWise/',SortSaleDataQuantityHLWise.as_view(),name='SortSaleQuanHL'),
    path('sortSaleDataTotalLHWise/',SortSaleDataTotalLHWise.as_view(),name='SortSaleTotalLH'),
    path('sortSaleDataTotalHLWise/',SortSaleDataTotalHLWise.as_view(),name='SortSaleTotalHL'),
    
    path('purchaseOrderList/',UserPurchaseOrderListView.as_view(),name='UserPurchaseData'),
    path('getPurchaseOrderList/',SendUserPurchaseOrderListView.as_view(),name='SendPurchaseData'),
    path('deleteUserPurchaseData/',DelteFromUserPurchaseList.as_view(),name='DeletePurchaseData'),
    path('searchPurchaseListData/',SearchPurchaseListData.as_view(),name='SearchPurchaseListData'),
    # For Sorting
    path('sortPurchaseDataDateLHWise/',SortPurchaseDataDateLHWise.as_view(),name='SortPurchaseDateLH'),
    path('sortPurchaseDataDateHLWise/',SortPurchaseDataDateHLWise.as_view(),name='SortPurchaseDateHL'),
    path('sortPurchaseDataQuantityLHWise/',SortPurchaseDataQuantityLHWise.as_view(),name='SortPurchaseQuanLH'),
    path('sortPurchaseDataQuantityHLWise/',SortPurchaseDataQuantityHLWise.as_view(),name='SortPurchaseQuanHL'),
    path('sortPurchaseDataTotalLHWise/',SortPurchaseDataTotalLHWise.as_view(),name='SortPurchaseTotalLH'),
    path('sortPurchaseDataTotalHLWise/',SortPurchaseDataTotalHLWise.as_view(),name='SortPurchaseTotalHL'),
    
]
