#1) მომხმარებელს შემოატანინეთ სიტყვა ან წინადადება შეინახეთ ის შეტრიალებულად reversed_string  ცვლადში და გამოიტანეთ ეს ცვლადი 
user_input = input("sityva: ")
reversed_string = ""

for char in user_input:
    reversed_string = char + reversed_string

print("sityva:", reversed_string)

