def max_digit(number):
    number = 6666789
    numList = list(str(number))
    return int(max(numList))


# if __name__ == '__main__':
#     print("Example:")
#     print(max_digit(0))

#     # These "asserts" are used for self-checking and not for an auto-testing
#     assert max_digit(0) == 0
#     assert max_digit(52) == 5
#     assert max_digit(634) == 6
#     assert max_digit(1) == 1
#     assert max_digit(10000) == 1
