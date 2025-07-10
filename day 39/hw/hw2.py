# 3. გააკეთეთ დავალებები, რომელიც იყო მოცემული classwork-ში For loop-ისა და range-ის დახმარებით.

def list_sum(list):
    sum = 0
    for i in list:
        sum += i
    
    return sum
print(list_sum([5, 10, 15, 20]))


def full_string(list):
    full_string = ""
    for i in list:
        full_string += i

    return full_string
print(full_string(["a",  "e", "i", "o", "u"]))
