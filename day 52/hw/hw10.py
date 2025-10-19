# 10) რიცხვის გამყოფები
# დაწერე ფუნქცია, რომელიც დააბრუნებს ყველა რიცხვს, რომლებიც ნაშთის გარეშე ყოფენ მოცემულ რიცხვს.
def get_divisors(number):
    divisors = []  
    for i in range(1, number + 1):
        if number % i == 0:  
            divisors.append(i)
    return divisors

print(get_divisors(12))  