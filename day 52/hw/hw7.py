# 7) საფუძვლების ამოცვლა
# დაწერე პროგრამა, რომელიც გადაჰყავს რიცხვი დეციმალურიდან ბინარულში.
def decimal_to_binary(number):
    return bin(number)[2:]  

num = int(input("შეიყვანე დეციმალური რიცხვი: "))
binary = decimal_to_binary(num)
print(f"ბინარული ფორმა: {binary}")
