def find_smallest(numbers, to_return):
    smallest = min(numbers)
    if to_return == "value":
        return smallest
    elif to_return == "index":
        return numbers.index(smallest)
