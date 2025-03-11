 #შეამოწმეთ მომხმარებლის შემოყვანილი რიცხვი ნეგატიურია პოზიტიურია თუ 0-ია. ამის მიხედვით გაუტოლეთ ცვლად res 0, -1 ან 1.
num = float(input("ricxvi: "))
if num > 0:
    res = 1
elif num < 0:
    res = -1
else:
    res = 0
print(f"res = {res}")
