# 4. შექმენით ფუნქცია, რომელსაც გადაეცემა list, თუ ამ ლისტში არის ყველა integer და ერთი string ან სხვა ნებისმიერი data type, თქვენ უნდა დააბრუნოით იგივე list განსხვავებული data type-ის გარეშე.
def clean_list(lst):
    count_not_int = 0
    new_list = []

    for item in lst:
        if type(item) == int:
            new_list.append(item)
        else:
            count_not_int += 1

    if count_not_int == 1:
        return new_list
    else:
        return lst

