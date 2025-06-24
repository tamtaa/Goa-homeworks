# codewars: Check if it is a vowel(a, e, i, o, u,) on the n position in a string (the first argument). Don't forget about uppercase.

# A few cases:

# {
# checkVowel('cat', 1)  ->   true // 'a' is a vowel
# checkVowel('cat', 0)  ->   false // 'c' is not a vowel
# checkVowel('cat', 4)  ->   false // this position doesn't exist
# }
# P.S. If n < 0, return false

def check_vowel(strng, position):
    vowels = "AEIOUaeiou"
    if position < 0 or position >= len(strng):
        return False
    return strng[position] in vowels
