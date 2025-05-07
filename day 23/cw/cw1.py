#შემოატანინეთ მომხმარებელს თავისი ასაკი და შეამოწმეთ, თუ ის 10-წლისაა ან უფრო პატარა, დაპრინტეთ "Kid", თუ 10-ზე მეტი და 18-ზე ნაკლები გამოიტანეთ "teenager", თუ 18-ზე მეტია და 30-ზე ნაკლები "adult", სხვა შემთხვევაში "unc"
age = int(input("შემოიტანეთ თქვენი ასაკი: "))

if age <= 10:
    print("Kid")
elif age > 10 and age < 18:
    print("teenager")
elif age >= 18 and age < 30:
    print("adult")
else:
    print("unc")
