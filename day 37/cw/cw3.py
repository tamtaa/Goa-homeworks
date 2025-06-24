# codewars: Write function RemoveExclamationMarks which removes all exclamation marks from a given string.


def remove_exclamation_marks(s):
    new_word =""
    for i in s:
        if i != '!':
            new_word += i
    return new_word