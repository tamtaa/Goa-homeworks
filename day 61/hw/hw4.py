# 4) გააკეთე "ქვა, ქაღალდი, მაკრატელი" – პროგრამამ უნდა აირჩიოს ერთ-ერთი.
import random

options = ("ქვა", "ქაღალდი", "მაკრატელი")
running = True

while running:
    player = None
    computer = random.choice(options)

    while player not in options:
        player = input("აირჩიეთ (ქვა, ქაღალდი, მაკრატელი): ").strip()

    print(f"თქვენი არჩევანი: {player}")
    print(f"კომპიუტერის არჩევანი: {computer}")

    
    if player == computer:
        print("ფრე!")
    elif (player == "ქვა" and computer == "მაკრატელი") or \
         (player == "ქაღალდი" and computer == "ქვა") or \
         (player == "მაკრატელი" and computer == "ქაღალდი"):
        print("გილოცავთ! თქვენ მოიგეთ!")
    else:
        print("კომპიუტერმა მოიგო!")

    play_again = input("გსურთ კიდევ ითამაშოთ? (კი/არა): ").strip().lower()
    if play_again != "კი":
        running = False

print("თამაშისთვის მადლობა!")
