#კლასში დაწერილ კოდს დაამატეთ ლოგიკა, რომ 3 არასწორი პაროლის შეყვანის შემდეგ კოდი გაჩერდეს
print("the password has to be over 8 characters, must contain A")
password = input("please input a password: ")
cda = 0
while len(password) < 8 or "A"not in password:
    cda += 1
    if cda==3:
        print("Your trial has expired")
    password = input("please input a password: ")
print("correct")