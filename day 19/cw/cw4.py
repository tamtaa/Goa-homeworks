#4) შექმენით ფუნქცია რომელიც იღებს მასივს ინტეჯერების და დააბრუნებს სტრინგ ამ ინტეჯერების გაერთიანების. მაგ ( [1,2,4,18] --->  "12418"  ) 
def join_num(num): 
    result = ""
    for num in num:
        result += str(num)
    return result
print(join_num([1, 2, 4, 18]))











