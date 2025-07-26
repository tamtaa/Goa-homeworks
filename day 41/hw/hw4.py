# 4. შექმენი სია numbers = [3, 7, 2, 9, 4, 1]. 
# გამოიყენე for ციკლი, რათა იპოვო ამ 
# სიაში მაქსიმალური რიცხვი (არ გამოიყენო max() ფუნქცია).

numbers = [3, 7, 2, 9, 4, 1] 

resi = numbers[0]

for i in range(1, len(numbers)):
    if numbers[i] > resi:
        resi = numbers[i]
print(resi) 