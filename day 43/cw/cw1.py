#  შექმენით ფუნქცია რომელიც არგუმენტად იღებს რისცხვების ლისტს და აბრუნებტს ამ რიცხვენის ჯამს.

def jami(numbers):
    total = 0
    for number in numbers:
        total += number
    return total
print(jami([5, 15, 25]))