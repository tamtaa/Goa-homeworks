# 4) დაწერე პროგრამა, რომელიც სიას დაალაგებს ისე, რომ ლუწები იყოს წინ და კენტები — უკან.
# მაგალითი: [1,2,3,4,5,6] → [2,4,6,1,3,5]
def evens_first(lst):
    evens = []
    odds = []
    for num in lst:
        if num % 2 == 0:
            evens.append(num)
        else:
            odds.append(num)
    return evens + odds
numbers = [1, 2, 3, 4, 5, 6]
print(evens_first(numbers)) 