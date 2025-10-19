
# 8) Guess the Number 🎲
# დააგენერირე შემთხვევითი რიცხვი 1–დან 100-მდე და აცადე მომხმარებელს გამოიცნოს. ყოველი მცდელობისას მიუთითე: "მეტია" თუ "ნაკლებია".
import random

def guess_the_number():
    secret_number = random.randint(1, 100)  # ვაგენერირებთ შემთხვევით რიცხვს
    attempts = 0

    print("🎯 გამოიცანი რიცხვი 1-დან 100-მდე!")

    while True:
        guess = int(input("შეიყვანე შენი ვარაუდი: "))
        attempts += 1

        if guess < secret_number:
            print("🔼 მეტია!")
        elif guess > secret_number:
            print("🔽 ნაკლებია!")
        else:
            print(f"🎉 სწორია! რიცხვი იყო {secret_number}.")
            print(f"შენ გამოიცანი {attempts} მცდელობით!")
            break

guess_the_number()
