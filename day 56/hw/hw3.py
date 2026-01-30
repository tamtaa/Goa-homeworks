# 3) დაწერე ფუნქცია, რომელიც იღებს მთელ რიცხვს და აბრუნებს მის ციფრთა ჯამს.
# მაგალითი: 1234 → 10
def sum_of_digits(n):
    total = 0
    for digit in str(n): 
        total += int(digit) 
    return total
print(sum_of_digits(1234)) 