#3) შექმენით ფუნქცია რომელიც იღებს მასივს და აბრუნებს ახალ მასივს კენტი ელემენტების გარეშე
def remove_odds(num):
    new_list = []
    for num in num:
        if num % 2 == 0:
            new_list.append(num)
    return new_list
print(remove_odds([1, 2, 3, 4, 5, 6]))