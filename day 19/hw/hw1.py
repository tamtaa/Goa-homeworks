#შექმენით ფუნქცია, რომელიც აერთებს ორ ლისტს (ორივეში მხოლოდ integer-ებია) და ასევე ალაგებს მათ ზრდადობის მიხედვით.
list1 = [2, 4, 6, 8]
list2 = [1, 3, 5, 7]
def combine_and_sort_lists(list1, list2):
    combined = list1 + list2
    n= len(combined)
    for i in range(n):
        for j in range(0, n - i - 1):
            if combined[j] > combined[j + 1]:
                 combined[j], combined[j + 1] = combined[j + 1], combined[j]
    return combined
print(combine_and_sort_lists(list1, list2))
