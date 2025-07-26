# 5. მომხმარებელს შეაყვანინე რიცხვი და გამოიყენე while ციკლი, 
# რომელიც შეკრებს ამ რიცხვამდე ყველა მთელ რიცხვს 
# (მაგ. თუ შეიყვანს 5-ს, უნდა დაითვალოს 1+2+3+4+5 = 15 და დაბეჭდოს შედეგი).

def range_gen_and_sum(n):
    iteration = 0
    sum = 0
    while iteration <= n:
        sum += iteration
        iteration += 1

    return sum

print(range_gen_and_sum(4))