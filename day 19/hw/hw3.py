#შექმენით ფუნქცია რომელიც იღებ არგუმენტებად ორ ლისტს და აბრუნებს დადებითი რიცხვების რაოდენობასა და უარყოფითების ჯამს (ცალ-ცალკე).
def count_positives_and_sum_negatives(list1, list2):
    combined = list1 + list2
    positive_count = 0  
    negative_sum = 0    
    for num in combined:
        if num > 0:
            positive_count += 1  
        elif num < 0:
            negative_sum += num  
    return positive_count, negative_sum
