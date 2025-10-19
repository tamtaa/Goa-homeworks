# 3) ფაქტორიალი
# დაწერე ფუნქცია, რომელიც გამოითვლის რიცხვის ფაქტორიალს (n!).
def factorial(n):
    result = 1
    for i in range(1, n+1):
        result *= i
    return result
print("faqtoriali:", factorial(5)) 
