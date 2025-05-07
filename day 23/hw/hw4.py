#შეეცადეთ შექმნათ ფუნქცია, სადაც მომხმარებელი შეიყვანს რამე ორ არგუმენტს, მაგალითად "Goa" და Str, 
#თქვენ უნდა შეამოწმოთ ემთხვევა თუ არა პირველი არგუმენტი მეორეს, ამ შემთხვევასი იქნება True რადგან "Goa" მართლაც არის String.
def x(a, b):
    if isinstance(a, b):
        return True
    else:
        return False
    

print(x(5,int))
print(x("5", int))
print(x("hello", str))