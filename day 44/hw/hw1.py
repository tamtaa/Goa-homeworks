def get_count(sentence):
    a_count=0
    for i in sentence:
        if i in "aeiou":
            a_count+=1
            
    return  a_count