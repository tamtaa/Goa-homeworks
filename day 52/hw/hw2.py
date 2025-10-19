# 2) რიცხვების ჯამი
# მომხმარებელს შემოატანინე 5 რიცხვი და იპოვე მათი ჯამი და საშუალო.

nums = [] 

for i in range(5):  
    n = int(input(f"{i+1} ricxvi: "))
    nums.append(n)

total = sum(nums)
avg = total / len(nums)

print("ricxvebi:", nums)
print("jami:", total)
print("sashualo:", avg)
