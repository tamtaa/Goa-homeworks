#მომხარებელს შემოატანინეთ რაიმე რიცხვი, შემდეგ for ციკლის გამოყენებით შეამოწმეთ, არის თუ არა ეს რიცხვი მარტივი,
#თუ არის დაპრინტეთ "your number is a prime" თუ არ არის დაპრინტეთ "your number is not a prime" 
num = int(input("ricxvi: "))
if num > 1:
    is_prime = True
    for i in range(2, int(num ** 0.5) + 1):  
        if num % i == 0:
            is_prime = False
            break
    if is_prime:
        print("Your number is a prime")
    else:
        print("Your number is not a prime")
else:
    print("Your number is not a prime")
