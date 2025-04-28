#2) შექმენით ორი ლისთი და ლუპის მეშევოებით შექმენით ახალი ლისთი რომელიც იქნება ამ ორის გაერთანება
list1 = [2, 4, 6]
list2 = [5, 7, 9]
list3 = []
for item in list1:
    list3.append(item)
for item in list2:
    list3.append(item)
print(list3)