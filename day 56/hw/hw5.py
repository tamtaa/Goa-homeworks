# 5) დაწერე ფუნქცია, რომელიც იღებს სტრინგს და აბრუნებს True თუ მასში ყველა ასო უნიკალურია, False — თუ რომელიმე მეორდება.
# მაგალითი: "python" → True, "hello" → False
def all_unique_letters(s):
    for i in s:
        if s.count(i) > 1:
            return False
    return True
print(all_unique_letters("python"))  
print(all_unique_letters("hello")) 