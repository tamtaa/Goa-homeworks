def scramble(strng, array):    
    result = [" "] * len(strng)
    
    for i in range(len(strng)):
        result[array[i]] = strng[i]
        
    return "".join(result)