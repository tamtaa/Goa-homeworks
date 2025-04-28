#შექმენით ფუნქცია რომელიც არგუმენტად იღებს ლისტს და შლის ყველა ელემენტს რომელიც უნაშთოდ იყოფა 3-ზე
def remove_divisible_by_3(numbers):
    result = []
    for num in numbers:
        if num % 3 != 0:  
            result.append(num)
    return result  
