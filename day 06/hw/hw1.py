 #მომხმარებელს შემოატანინეთ რიცხვი, შემდეგ for ციკლის გამოყენებით, გამოთვალეთ და გამოიტანეთ მხოლოდ კენტი რიცხვების ჯამი
num=int(input("ricxvi: "))
res=0
for i in range(1,num+1,2):
    if i % 2 != 0:
         res+=i
    print("sum_of_odd_numbers:",res)