#შექმენით manual_append ფუნქცია
def manual_append(lst, item):
    lst += [item]
    return lst
list = [1, 2, 3]
manual_append(list, 4)
print(list)  