# 3) დაწერე პროგრამა, რომელიც 1-დან 10-მდე შემთხვევით რიცხვს ირჩევს და მომხმარებელი უნდა გამოიცნოს.
import random

number = random.randint(1, 10)
while True:
 guess = int(input("gamoican ricxvi 1dan 10mde: "))
 if guess == number:
   print("sworia")
   break
 else:
   print("arasworia scade tavidan")
