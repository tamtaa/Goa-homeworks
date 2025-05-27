def is_vow(inp):
    vowels = {'a', 'e', 'i', 'o', 'u'}
    return [chr(i) if chr(i) in vowels else i for i in inp]
