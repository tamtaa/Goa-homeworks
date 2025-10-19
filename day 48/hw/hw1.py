# 1. მოცემულია რიცხვების სია — იპოვე და დაბეჭდე ის რიცხვები, რომლებიც სიაში მეორდება.
nums = [1, 2, 3, 2, 4, 5, 3, 3, 6, 1]

seen = set()
dupes = set()

for x in nums:
    if x in seen:
        dupes.add(x)
    else:
        seen.add(x)

print("მეორდება:", sorted(dupes))  
