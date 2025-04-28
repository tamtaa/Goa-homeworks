#შექმენით ფუნქცია რომელიც არგუმენტებად იღებს ორ ლისტს და გამოაქვს ის, რომლის ელემენტებთა ჯამი (iteger-თა) უფრო მეტია.
def list_with_greater_sum(list1, list2):
   
   sum1 = sum(list1)
   sum2 = sum(list2)
   
   if sum1 > sum2:
        return list1
   elif sum2 > sum1:
        return list2
   else:
        return 
   
list1 = [1, 2, 3]
list2 = [4, 5, 3]



print(list_with_greater_sum(list1, list2))
