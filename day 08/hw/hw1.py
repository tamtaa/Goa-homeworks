#For loop-ის დახმარებით შექმენით პროგრამა, სადაც მომხმარებელი შემოიტანს რიცხვს 
#(50-ის ჩათვლით, თუ არა დაუპრინტეთ, რომ თავიდან შეიყვანოს), და თქვენ გამოიტანეთ ამ რიცხვის ჯერადები 100-ის ჩათვლით.
num=int(input("shemoitane ricxvi(50-is chatvlit): "))
if num > 50:
    print("shemoiyvane ricxvi 50-is chatvlit")
else:
    for i in range(1, 101):
        print(f"{num} * i = {num * i} ")