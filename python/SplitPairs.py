import math
def split_pairs(a):
    a = 'abcdef'
    tt = []
    
    if len(a) % 2 == 1:
        for i in range(math.floor(len(a)/2) + 1): # i in 2 0 1 2
            if i == range(math.floor(len(a)/2)):
                tt.append(a[-1])
            else:
                tt.append(a[i*2:i*2+2])
        tt[-1] += '_'

    else:
        for i in range(math.floor(len(a)/2)): # i in 2 0 1 2
            tt.append(a[i*2:i*2+2])

    return tt


# if __name__ == '__main__':
#     print("Example:")
#     print(list(split_pairs('abcd')))

#     # These "asserts" are used for self-checking and not for an auto-testing
#     assert list(split_pairs('abcd')) == ['ab', 'cd']
#     assert list(split_pairs('abc')) == ['ab', 'c_']
#     assert list(split_pairs('abcdf')) == ['ab', 'cd', 'f_']
#     assert list(split_pairs('a')) == ['a_']
#     assert list(split_pairs('')) == []