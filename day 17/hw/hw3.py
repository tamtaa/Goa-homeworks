#შექმენით manual_len ფუნქცია
listn = True
def manual_len(l):
    res = 0
    if type (l) == list:
        for i in l:
            res += 1
    else:
        for i in str(l):
            res += 1
    return res
print(manual_len(listn))