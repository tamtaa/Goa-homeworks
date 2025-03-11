#შექმენით ფუნქცია რომელსაც გადაეცემა ორი პარამეტრი name, lastname. 
#თქვენი დავალებაა გამოიტანოთ სახელის პირველი ასო, წერტილი და გვარი.
def format_name(name, lastname):
    return f"{name[0]}.{lastname}"
print(format_name("Tamta", "Bakhtadze")) 
