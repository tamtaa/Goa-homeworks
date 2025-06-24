# codewars:This time no story, no theory. The examples below show you how to write function accum:
# Examples:
# accum("abcd") -> "A-Bb-Ccc-Dddd"
# accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
# accum("cwAt") -> "C-Ww-Aaa-Tttt"
# The parameter of accum is a string which includes only letters from a..z and A..Z.
def accum(st):
    string = ""
    for i in range(0, len(st)):
        if i < (len(st) - 1):
            string = string + st[i] * (i+1) + "-"
        else:
            string = string + st[i] * (i+1)

    return string.title()
