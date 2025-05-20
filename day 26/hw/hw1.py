## 2. შექმენით ფუნქცია, რომელიც მიიღებს მომხმარებლისგან არგუმენტს და მისი type-ის სესაბამისად გამოიტანეთ სიტყვები:
# Str - "Literature"
# Int/Float - "Math"
# Bool - "Science"
def type(value):
    if isinstance(value, str):
        return "Literature"
    elif isinstance(value, (int, float)):
        return "Math"
    elif isinstance(value, bool):
        return "Science"
    else:
        return "Unknown"
