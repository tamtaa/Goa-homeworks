#გამოიყენეთ Comprasion Operations და Logical Operations ერთად, 
#შეეცადეთ კომენტარებით ახსნათ რატომ გამოაქვს ესეთი შედეგი და ასევე თუ რომელი სრულდება პირველი, რა თანმიმდევრობით.
a = 10
b = 20
c = 30
 
result = (a < b or b > c)and not(c == 30)

#1. პირველი სრულდება ფრჩხილებში ჩასმული მაგალითი
#  (a < b or b > c)
# a < b = 10 < 20 = true
# b > c = 20 > 30 = False
# true or false = True

# 2. შემდეგი შესრულდება ისევ ფრჩხილები
# (c == 30) = 30==30 = true
# not true = False

# 3. საბოლოოდ სრულდება and ოპერაცია 
# true and false = false

print("შედეგი:",result)
