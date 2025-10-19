def generate_pairs(n):
    pairs = []
    for a in range(n + 1):
        for b in range(a, n + 1):
            pairs.append([a, b])
    return pairs