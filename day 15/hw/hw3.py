#მოცემული list-იდან: [1,2,3,3,4,5] ამოშალეთ ის რიცხვი რომელიც არღვევს თანმიმდევრობას (pop)
num = [1, 2, 3, 3, 4, 5]
for i in range(1, len(num)):
    if num[i] == num[i-1]:
        num.pop(i)
        break
print(num)



