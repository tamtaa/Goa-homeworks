# შექმენით პროგრამა რომელიც მომხმარებელს ეკითხება რიცხვს და თუ ეს ტიცხვი ლუწია 10-ჯერ გამოუტანს "yes", ხოლო თუ ის კენტია "No'-ს
number = int(input("enter a number: "))

if number % 2 == 0:
    for _ in range(10):
        print("yes")
else:
    print("No")