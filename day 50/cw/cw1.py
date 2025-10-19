def square_digits(num):
    num_str = ""
    for i in str(num):
        t = int(i) ** 2
        num_str += str(t)
    n = int(num_str)
    return n