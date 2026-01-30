#  level 57:
# 1) შექმენი სია რიცხვებით: numbers = [3, 7, 12, 5, 18, 1]
# დაბეჭდე მხოლოდ 5-ზე მეტი რიცხვები.
# დაბეჭდე, რამდენი რიცხვი იყო >5.
numbers = [3,  7, 12, 5, 18, 1]
count = 0
print("numbers > 5:")
for num in numbers:
    if num > 5:
        print(num)
        count += 1
print("Count:", count)
