import random

# სიტყვების სია
words = ["hello", "world", "how", "coffee", "tea"]

# შემთხვევითი სიტყვის არჩევა
word = random.choice(words)

# სიტყვა _-ებით (დამალული სიტყვა)
guessed_word = []
for letter in word:
    guessed_word.append("_")

print("სიტყვა:", guessed_word)

# სიცოცხლეები
hearts = 6

# თამაში
while hearts > 0 and "_" in guessed_word:
    guess = input("შეიყვანე ასო: ").lower()

    if guess in word:
        # თუ ასო სწორია, ჩავწეროთ შესაბამის ადგილებში
        for i in range(len(word)):
            if word[i] == guess:
                guessed_word[i] = guess
        print("სწორია!", guessed_word)
    else:
        hearts -= 1
        print("არასწორია ❌ დარჩენილი სიცოცხლეები:", hearts)

# თამაშის შედეგი
if "_" not in guessed_word:
    print("გილოცავ 🎉 მოიგე! სიტყვა იყო:", word)
else:
    print("წააგე 😢 სიტყვა იყო:", word)
