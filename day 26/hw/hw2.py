#3. შექმენით ფუნქცია რომელიც არგუმენტად მიიღებს ლისტს და გამოიტანეთ ის data type რომელიც ყველაზე ხშირად გვხვდება ამ ლისტსში.
def type(lst):
    type_count = {}
    for item in lst:
        t = type(item)
        type_count[t] = type_count.get(t, 0) + 1
    return max(type_count, key=type_count.get)
