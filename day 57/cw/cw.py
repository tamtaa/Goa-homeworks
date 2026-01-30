# cw1
def grader(score):

    if score > 1 or score < 0.6:
        return "F"
    if score >= 0.9:
        return "A"
    if score >= 0.8:
        return "B"
    if score >= 0.7:
        return "C"
    if score >= 0.6:
        return "D"
    

# cw2.
def xo(s):
    s = s.lower()
    countx = 0
    county = 0
    for i in range(len(s)):
        if s[i] == "x":
            countx = countx + 1
        elif s[i] == "o":
             county = county + 1
    if countx == county:
        return True
    elif countx == 0 and county == 0:
        return True
    else:
        return False
    

# cw3.
def is_uppercase(inp):
    return inp == inp.upper()