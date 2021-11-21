def nearest_value(values, one):
    values = [0,-2]
    one = -1
    value = list(values)
    diff = []
    for i in range(len(value)):
        if value[i] >= 0:
            diff.append(abs(value[i] - one))
        else:
            diff.append((value[i]-one))

    minimun = diff.index(min(diff))
    value[minimun]

    return value[minimun]


# if __name__ == '__main__':
#     print("Example:")
#     print(nearest_value({4, 7, 10, 11, 12, 17}, 9))

#     # These "asserts" are used for self-checking and not for an auto-testing
#     assert nearest_value({4, 7, 10, 11, 12, 17}, 9) == 10
#     assert nearest_value({4, 7, 10, 11, 12, 17}, 8) == 7
#     assert nearest_value({4, 8, 10, 11, 12, 17}, 9) == 8
#     assert nearest_value({4, 9, 10, 11, 12, 17}, 9) == 9
#     assert nearest_value({4, 7, 10, 11, 12, 17}, 0) == 4
#     assert nearest_value({4, 7, 10, 11, 12, 17}, 100) == 17
#     assert nearest_value({5, 10, 8, 12, 89, 100}, 7) == 8
#     assert nearest_value({-1, 2, 3}, 0) == -1
