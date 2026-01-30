# 2) დაწერე პროგრამა, რომელიც სიიდან გამოიტანს მხოლოდ იმ რიცხვებს, რომლებიც უნიკალურია (არ მეორდება).
# მაგალითი: [1,2,2,3,4,4,5] → [1,3,5]
def unique_numbers(lst):
    result = []
    for num in lst:
        if lst.count(num) == 1:  
            result.append(num)
    return result
numbers = [1, 2, 2, 3, 4, 4, 5]
print(unique_numbers(numbers))  