# ===============================
# 1) dictionary ჩემს შესახებ
# ===============================

about_me = {
    "name": "Tamta",          # სახელი
    "age": 21,                # ასაკი
    "favorite_animal": "Cat"  # საყვარელი ცხოველი
}

print("ჩემ შესახებ ინფორმაცია:", about_me)


# ===============================
# 2) ფუნქცია – რიცხვი დადებითია თუ უარყოფითი
# ===============================

def check_number(num):
    if num > 0:
        return "რიცხვი დადებითია"
    elif num < 0:
        return "რიცხვი უარყოფითია"
    else:
        return "რიცხვი არის ნული"

# ტესტი
print(check_number(10))
print(check_number(-5))
print(check_number(0))


# ===============================
# 3) მომხმარებლის მონაცემების მიღება და dictionary-ში შენახვა
# ===============================

user_name = input("შეიყვანე შენი სახელი: ")
user_age = int(input("შეიყვანე შენი ასაკი: "))
favorite_color = input("შეიყვანე შენი საყვარელი ფერი: ")

user_info = {
    "name": user_name,
    "age": user_age,
    "favorite_color": favorite_color
}

print("მომხმარებლის ინფორმაცია:", user_info)


# ===============================
# 4) ფუნქცია – dictionary-ის value-ების ჯამი
# ===============================

def sum_values(data):
    total = 0
    for value in data.values():
        total += value
    return total

# მაგალითი dictionary
fruits = {
    "apples": 5,
    "bananas": 3,
    "oranges": 10
}

print("ხილების რაოდენობის ჯამი:", sum_values(fruits))
