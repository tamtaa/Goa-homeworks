# მომხმარებეს შემოატანინეთ სამ ასოიანი სიტყვა,
#თუ  მან არ შემოიყვანა სამი ასო მაშინ გამოუპრინტეთ რომ მან უნდა შეიყვანოს ზუსტად სამი ასო და გაუშვას პროგრამა თავიდან.
#როდესაც მომხმარებელი შეიყვანს სამ ასოიან სიტყვას, შეამოწმეთ არის თუ არა ის პალინდრომი და გაოუტანეთ True ან False შესაბამისად

user_input = input("put in a 3 letter word: ")
if len(user_input) != 3:
    print("sheiyvane 3 asoiani sityva")
else:
    is_palindrome = True
    for i in range(len(user_input) // 2):
        if user_input[i] != user_input[-(i + 1)]:
            is_palindrome = False
    print(is_palindrome)
