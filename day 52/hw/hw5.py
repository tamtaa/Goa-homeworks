# 5) ყველაზე დიდი რიცხვი
# მოცემული სიისგან (მაგ. [4, 7, 1, 9, 2]) იპოვე ყველაზე დიდი რიცხვი max() ფუნქციის გარეშე.
my_list = [4, 7, 1, 9, 2]
max_num = my_list[0]
for num in my_list:
    if num > max_num:
        max_num = num

print(f"didi ricxvi: {max_num}")