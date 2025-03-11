#შექმენით პატარა თამაში, სადაც თქვენ შექმნით რაიმე რიცხვების თანმიმდევრობას
#(ოთხნიშნა integer-რიცხვი), და მომხმარებელმა კი უნდა გამოიცნოს ეს თანმიმდევრობა (გამოიყენეთ While loop)
nums = 1357
user_nums = int (input("4 ricxvis mimdevroba:"))
while user_nums != nums:
    if len(str(user_nums)) !=len(str(nums)):
        print("mimdevroba ar unda sheicavdes 4-ze met ricxvs")
    user_nums = int(input("arasworia scadet tavidan: "))
print("sworia.")