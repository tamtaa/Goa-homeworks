# 3. გამოიყენე while ციკლი და range() ფუნქციის მსგავსი ლოგიკა, 
# რათა დაბეჭდო ყველა ლუწი რიცხვი 0-დან 20-ის ჩათვლით.

iteration = 0
while iteration <= 20:
    if iteration % 2 == 0:
        print(iteration)
    iteration += 1