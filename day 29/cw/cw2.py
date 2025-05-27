def count_positives_sum_negatives(arr):
    if not arr:
        return []

    positive_count = sum(1 for x in arr if x > 0)
    negative_sum = sum(x for x in arr if x < 0)

    return [positive_count, negative_sum]