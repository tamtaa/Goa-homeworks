# 2) მომხმარებელს ჰკითხე 5 საყვარელი ხილის სახელი და შეინახე სია.
# დაამატე 2 დამატებითი ხილი.
# წაშალე სიის ბოლო ელემენტი.
# დაბეჭდე სია საწყისი სორტირებით და ალფავიტური სორტირებით.
fruits_tuple = (
    input("xili1: "),
    input("xili2: "),
    input("xili3: "),
    input("xili4: "),
    input("xili5: ")
)
fruits = list(fruits_tuple)
fruits += ["Mango", "atami"]
fruits.pop()
print("sawyisi:", fruits)
fruits.sort()
print("alfaveturi:", fruits)