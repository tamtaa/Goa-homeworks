#შექმენით manual_sum ფუნქცია
list= [1, 2, 3, 4, 5]
def manual_sum(a):
    res = 0
    for i in a:
        res +=i
    return res
print(manual_sum(list))