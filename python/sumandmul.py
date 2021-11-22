def checkio(array1: list) -> int:
    sum = 0
    for i in range(len(array1)):
        if i % 2 == 0:
            sum += array1[i]
    if len(array1) == 0:
        array1.append(0)        

    return sum * array1[-1]

#These "asserts" using only for self-checking and not necessary for auto-testing
# if __name__ == '__main__':
#     print('Example:')
#     print(checkio([0, 1, 2, 3, 4, 5]))
    
#     assert checkio([0, 1, 2, 3, 4, 5]) == 30, "(0+2+4)*5=30"
#     assert checkio([1, 3, 5]) == 30, "(1+5)*5=30"
#     assert checkio([6]) == 36, "(6)*6=36"
#     assert checkio([]) == 0, "An empty array = 0"
