#შექმენით ფუნქცია რომელსაც გამოაქვს არგუმენტად გადაცემული ლისტის ფორმა, სადაც ყველა ელემენტი გარომაგებულია 2-ზე, 
#მაგალითად input: [2,3,4,5], output: [4,6,8,10]
def multiply_elements_by_2(numbers):
    return [num * 2 for num in numbers]
