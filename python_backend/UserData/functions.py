from .models import *
def check_data_presence(username,password):
        try:
            user_data = UserDataModule.objects.get(username=username,password = password)
            return True
        except:
            return False
        
def deleteSalesData(username,order_num,sale_date,product_name,product_quan):
    try:
        user_sale_data = UserSalesOrderListModule.objects.get(username=username,order_num=order_num,sale_date=sale_date,product_quan=product_quan)
        user_sale_data.delete()
        return True
    except:
        return False

def deletePurchaseData(username,purchase_num,purchase_date,product_name,product_quan):
    try:
        user_purchase_data = UserPurchaseOrderListModule.objects.get(username=username,purchase_num=purchase_num,purchase_date=purchase_date,product_name=product_name,product_quan=product_quan)
        user_purchase_data.delete()
        return True
    except:
        return False
    
def sortSaleTotalLHWise(username):
    try:
        print(UserSalesOrderListModule.objects.filter(username=username))
        user_sale_data = [element for element in UserSalesOrderListModule.objects.filter(username=username)]
        index = 0
        while index < len(user_sale_data)-1:
            if user_sale_data[index].product_cost * user_sale_data[index].product_quan > user_sale_data[index+1].product_cost * user_sale_data[index+1].product_quan:
                temp = user_sale_data[index]
                user_sale_data[index] = user_sale_data[index+1]
                user_sale_data[index+1] = temp
                index = 0
            else:
                index += 1
        return user_sale_data
    except:
        return UserSalesOrderListModule.objects.filter(username=username)

def sortSaleTotalHLWise(username):
    try:
        user_sale_data = [element for element in UserSalesOrderListModule.objects.filter(username=username)]
        index = 0
        while index < len(user_sale_data)-1:
            if user_sale_data[index].product_cost * user_sale_data[index].product_quan < user_sale_data[index+1].product_cost * user_sale_data[index+1].product_quan:
                temp = user_sale_data[index]
                user_sale_data[index] = user_sale_data[index+1]
                user_sale_data[index+1] = temp
                index = 0
            else:
                index += 1
        return user_sale_data
    except:
        return UserSalesOrderListModule.objects.filter(username=username)
    
def sortSaleQuantityLHWise(username):
    try:
        user_sale_data = [element for element in UserSalesOrderListModule.objects.filter(username=username)]
        index = 0
        while index < len(user_sale_data)-1:
            if user_sale_data[index].product_quan > user_sale_data[index+1].product_quan:
                temp = user_sale_data[index]
                user_sale_data[index] = user_sale_data[index+1]
                user_sale_data[index+1] = temp
                index = 0
            else:
                index += 1
        return user_sale_data
    except:
        return UserSalesOrderListModule.objects.filter(username=username)

def sortSaleQuantityHLWise(username):
    try:
        user_sale_data = [element for element in UserSalesOrderListModule.objects.filter(username=username)]
        index = 0
        while index < len(user_sale_data)-1:
            if user_sale_data[index].product_quan < user_sale_data[index+1].product_quan:
                temp = user_sale_data[index]
                user_sale_data[index] = user_sale_data[index+1]
                user_sale_data[index+1] = temp
                index = 0
            else:
                index += 1
        return user_sale_data
    except:
        return UserSalesOrderListModule.objects.filter(username=username)
    
def sortSaleDateLHWise(username):
    try:
        user_sale_data = [element for element in UserSalesOrderListModule.objects.filter(username=username)]
        index = 0
        while index < len(user_sale_data)-1:
            if user_sale_data[index].sale_date > user_sale_data[index+1].sale_date:
                temp = user_sale_data[index]
                user_sale_data[index] = user_sale_data[index+1]
                user_sale_data[index+1] = temp
                index = 0
            else:
                index += 1
        return user_sale_data
    except:
        return UserSalesOrderListModule.objects.filter(username=username)

def sortSaleDateHLWise(username):
    try:
        user_sale_data = [element for element in UserSalesOrderListModule.objects.filter(username=username)]
        index = 0
        while index < len(user_sale_data)-1:
            if user_sale_data[index].sale_date < user_sale_data[index+1].sale_date:
                temp = user_sale_data[index]
                user_sale_data[index] = user_sale_data[index+1]
                user_sale_data[index+1] = temp
                index = 0
            else:
                index += 1
        return user_sale_data
    except:
        return UserSalesOrderListModule.objects.filter(username=username)
    

def sortPurchaseTotalLHWise(username):
    try:
        user_sale_data = [element for element in UserPurchaseOrderListModule.objects.filter(username=username)]
        index = 0
        while index < len(user_sale_data)-1:
            if user_sale_data[index].product_cost * user_sale_data[index].product_quan > user_sale_data[index+1].product_cost * user_sale_data[index+1].product_quan:
                temp = user_sale_data[index]
                user_sale_data[index] = user_sale_data[index+1]
                user_sale_data[index+1] = temp
                index = 0
            else:
                index += 1
        return user_sale_data
    except:
        return UserPurchaseOrderListModule.objects.filter(username=username)

def sortPurchaseTotalHLWise(username):
    try:
        user_sale_data = [element for element in UserPurchaseOrderListModule.objects.filter(username=username)]
        index = 0
        while index < len(user_sale_data)-1:
            if user_sale_data[index].product_cost * user_sale_data[index].product_quan < user_sale_data[index+1].product_cost * user_sale_data[index+1].product_quan:
                temp = user_sale_data[index]
                user_sale_data[index] = user_sale_data[index+1]
                user_sale_data[index+1] = temp
                index = 0
            else:
                index += 1
        return user_sale_data
    except:
        return UserPurchaseOrderListModule.objects.filter(username=username)
    
def sortPurchaseQuantityLHWise(username):
    try:
        user_sale_data = [element for element in UserPurchaseOrderListModule.objects.filter(username=username)]
        index = 0
        while index < len(user_sale_data)-1:
            if user_sale_data[index].product_quan > user_sale_data[index+1].product_quan:
                temp = user_sale_data[index]
                user_sale_data[index] = user_sale_data[index+1]
                user_sale_data[index+1] = temp
                index = 0
            else:
                index += 1
        return user_sale_data
    except:
        return UserPurchaseOrderListModule.objects.filter(username=username)

def sortPurchaseQuantityHLWise(username):
    try:
        user_sale_data = [element for element in UserPurchaseOrderListModule.objects.filter(username=username)]
        index = 0
        while index < len(user_sale_data)-1:
            if user_sale_data[index].product_quan < user_sale_data[index+1].product_quan:
                temp = user_sale_data[index]
                user_sale_data[index] = user_sale_data[index+1]
                user_sale_data[index+1] = temp
                index = 0
            else:
                index += 1
        return user_sale_data
    except:
        return UserPurchaseOrderListModule.objects.filter(username=username)
    
def sortPurchaseDateLHWise(username):
    try:
        user_sale_data = [element for element in UserPurchaseOrderListModule.objects.filter(username=username)]
        index = 0
        while index < len(user_sale_data)-1:
            if user_sale_data[index].purchase_date > user_sale_data[index+1].purchase_date:
                temp = user_sale_data[index]
                user_sale_data[index] = user_sale_data[index+1]
                user_sale_data[index+1] = temp
                index = 0
            else:
                index += 1
        return user_sale_data
    except:
        return UserPurchaseOrderListModule.objects.filter(username=username)

def sortPurchaseDateHLWise(username):
    try:
        user_sale_data = [element for element in UserPurchaseOrderListModule.objects.filter(username=username)]
        index = 0
        while index < len(user_sale_data)-1:
            if user_sale_data[index].purchase_date < user_sale_data[index+1].purchase_date:
                temp = user_sale_data[index]
                user_sale_data[index] = user_sale_data[index+1]
                user_sale_data[index+1] = temp
                index = 0
            else:
                index += 1
        return user_sale_data
    except:
        return UserPurchaseOrderListModule.objects.filter(username=username)
    
def searchDataFromPurchaseList(username,user_input):
    try:
        user_sale_data = [element for element in UserPurchaseOrderListModule.objects.filter(username=username)]
        dataToReturn = []
        for element in user_sale_data:
            if element.purchase_num[:len(user_input)].lower() == user_input or element.product_name[:len(user_input)].lower() == user_input:
                dataToReturn.append(element)
        return dataToReturn
    except:
        return UserPurchaseOrderListModule.objects.filter(username=username)

def searchDataFromSaleList(username,user_input):
    try:
        user_sale_data = [element for element in UserSalesOrderListModule.objects.filter(username=username)]
        dataToReturn = []
        for element in user_sale_data:
            if element.order_num[:len(user_input)].lower() == user_input or element.product_name[:len(user_input)].lower() == user_input:
                dataToReturn.append(element)
        return dataToReturn
    except:
        return UserSalesOrderListModule.objects.filter(username=username)
    
def searchDataFromAccountList(username,user_input):
    try:
        user_sale_dataB = [element for element in UserBankAccountsDataModule.objects.filter(username=username)]
        user_sale_dataC = [element for element in UserCardAccountsDataModule.objects.filter(username=username)]
        dataToReturn = [[],[]]
        for element in user_sale_dataB:
            if str(element.acc_name[:len(user_input)]).lower() == user_input or str(element.acc_code[:len(user_input)]).lower() == user_input or str(element.bank_name[:len(user_input)]).lower() == user_input:
                dataToReturn[0].append(element)
        for element in user_sale_dataC:
            if str(element.acc_name[:len(user_input)]).lower() == user_input or str(element.acc_code[:len(user_input)]).lower() == user_input or str(element.bank_name[:len(user_input)]).lower() == user_input:
                dataToReturn[1].append(element)
        return dataToReturn
    except:
        return [[UserBankAccountsDataModule.objects.filter(username=username)],[UserCardAccountsDataModule.objects.filter(username=username)]]
    
def generateRevenue(username):
    try:
        user_sale_dataP = [element for element in UserPurchaseOrderListModule.objects.filter(username=username)]
        user_sale_dataS = [element for element in UserSalesOrderListModule.objects.filter(username=username)]
        dataToReturn = {}
        mergerd_data = []
        
        for element in user_sale_dataP:
            mergerd_data.append(element)
            dataToReturn[element.purchase_date] = element.product_cost * element.product_quan
        for element in user_sale_dataS:
            mergerd_data.append(element)
            dataToReturn[element.sale_date] = element.product_cost * element.product_quan
        for (key,value) in dict(dataToReturn).items():
            val = 0
            for element in UserSalesOrderListModule.objects.filter(username=username,sale_date=key):
                val += (element.product_cost * element.product_quan)
            for element in UserPurchaseOrderListModule.objects.filter(username=username,purchase_date=key):
                val -= (element.product_cost * element.product_quan)
            dataToReturn.update({key:val})
        return dataToReturn
    except:
        return [UserSalesOrderListModule.objects.filter(username=username)]