from turtle import *
# we want to paint a house
#step 1: draw a square
width(7)
color("purple")
forward(200) 
left(90) 
forward(200) 
left(90) 
forward(200) 
left(90) 
forward(200) 
left(90)
#end of square
#drawing a door
forward(70)
color("yellow")
begin_fill()
left(90)
forward(120)    #hight of the door
right(90)
forward(60)
right(90)
forward(120) 
end_fill()
penup()
goto(200, 200)
pendown()
color("red")
begin_fill()
right(150)
forward(200)
left(120)
forward(200)
end_fill()
#drawing a windows
penup()
color("blue")
left(90)
forward(70)
pendown()
left(118)
forward(20)
left(90)
forward(40)
left(90)
forward(50)
left(90)
forward(40)
left(90)
forward(35)
penup()
right(90)
forward(65)
left(90)
pendown()
forward(20)
right(90)
forward(40)
right(90)
forward(50)
right(90)
forward(40)
right(90)
forward(35)


exitonclick() 
