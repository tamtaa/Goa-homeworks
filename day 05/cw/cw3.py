#შექმენით correct_password ცვლადი სადაც შეინახავთ რაიმე პაროლს, შემდეგ მომხმარებელს inputით შემოატანინეთ რაიმე პაროლი, 
#სანამ ეს მომხმარებლის შემოტანილი პაროლი არ უდრის correct_passwordს თავიდან შემოატანინეთ მომხმარებელს პაროლი
correct_password =  "tamta6756"
user_password = input("paroli: ")

while user_password != correct_password:
    print("paroli arasworia")
    user_password = input("parol: ")

print("paroli sworia")
