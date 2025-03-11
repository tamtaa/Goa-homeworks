#მომხმარებელს შემოატანინეთ ნებისმიერი სიტყვა, 
# შემდეგ ამ სიტყვიდან გამოიტანეთ მხოლოდ 'A' ასოები, თუ არ შეიცავს 'A'ს გამოიტანეთ ცარიელი სტრინგი
word = input("chaweret nebismieri sityva: ")

result = "".join([letter for letter in word if letter == 'A' or letter == 'a'])

print(result)
