def sum_two_smallest_numbers(numbers):
    smallest = min(numbers)
    numbers.remove(smallest)
    second_smallest = min(numbers)
    return smallest + second_smallest