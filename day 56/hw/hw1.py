# 1) დაწერე ფუნქცია, რომელიც იღებს სტრინგს და აბრუნებს ყველაზე ხშირ სიმბოლოს მასში.
# მაგალითი: "banana" → "a" 
def func(s):
    max_count = 0
    result = ""
    for i in s:
        if s.count(i) > max_count:
            max_count = s.count(i)
            result = i
    return result
print(func("banana")) 
