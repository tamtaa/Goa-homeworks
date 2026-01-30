# 1) დაასრულეთ გაკვეთილზე გაკეთებული პროექტი
#1 ipmort random

#2 list

#3 while loop

#4 input

#5 for loop

import random
def words():
    words = ["hello", "world", "how", "coffee", "tea"]
    word = random.choice(words)

    guessed_word = []
    for i in word:
        guessed_word.append("_")
    print(guessed_word)
   
    hearts = 6
    right_words = set()

    while hearts > 0:
        game = input("შემოიტანეთ ასო: ").lower()
        if game in right_words:
            print("სწორია")
            continue
        
        if game in word:
            print("სწორია")
            right_words.add(game)
            for i, letter in enumerate(word):
                if letter == game:
                    guessed_word[i] = game
        
        else:
            hearts -= 1
            print(f"არასწორია! დაგრჩათ {hearts} სიცოცხლე.")
       
        print("სიტყვა:", " ".join(guessed_word))
        if "_" not in guessed_word: 
            print("გილოცავთ! გამოიცანით სიტყვა:", word)
            break

    if hearts == 0:
        print("თქვენ წააგეთ! სიტყვა იყო:", word)        

words()