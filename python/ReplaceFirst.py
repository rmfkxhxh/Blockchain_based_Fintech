def replace_first(items):
    items = [1,2,3,4,5]
    if len(items) > 1:
        first = items.pop(0)
        items.append(first)
    return items


# if __name__ == "__main__":
#     print("Example:")
#     print(list(replace_first([1, 2, 3, 4])))

#     # These "asserts" are used for self-checking and not for an auto-testing
#     assert list(replace_first([1, 2, 3, 4])) == [2, 3, 4, 1]
#     assert list(replace_first([1])) == [1]
#     assert list(replace_first([])) == []

