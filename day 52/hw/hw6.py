# 6) პალინდრომი

# დაწერე პროგრამა, რომელიც ამოწმებს სიტყვა არის თუ არა პალინდრომი (მაგ. ana, level).


word = input("sityva: ")
if word == word[::-1]:
    print("aris.")
else:
    print("ar aris.")
