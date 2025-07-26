def descending_order(num):
    num = list(str(num))
    num.sort(reverse = True)
    result = ''
    for i in num:
        result += i
    return(int(result))
    