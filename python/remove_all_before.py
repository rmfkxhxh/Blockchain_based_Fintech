# def remove_all_before(items: list, border: int):
#     # your code here
#     return items


# if __name__ == '__main__':
#     print("Example:")
#     print(list(remove_all_before([1, 2, 3, 4, 5], 3)))

#     # These "asserts" are used for self-checking and not for an auto-testing
#     assert list(remove_all_before([1, 2, 3, 4, 5], 3)) == [3, 4, 5]
#     assert list(remove_all_before([1, 1, 2, 2, 3, 3], 2)) == [2, 2, 3, 3]
#     assert list(remove_all_before([1, 1, 2, 4, 2, 3, 4], 2)) == [2, 4, 2, 3, 4]
#     assert list(remove_all_before([1, 1, 5, 6, 7], 2)) == [1, 1, 5, 6, 7]
#     assert list(remove_all_before([], 0)) == []
#     assert list(remove_all_before([7, 7, 7, 7, 7, 7, 7, 7, 7], 7)) == [7, 7, 7, 7, 7, 7, 7, 7, 7]



def remove_all_before(lists, tt):
    a = []
    b = []
    c = []
    

    for i in range(len(lists)):
        if type(lists[i]) != list:
            b.append(lists[i])
        if type(lists[i]) == list:
            for j in range(len(lists[i])):
                c.append(lists[i][j])
            break
    if len(b) == 0:
        a = c
        
    else:
        for i in range(len(c)):
            b.append(c[i])
        a = b    
        if tt != 0 and tt in a:
            inte = a.index(tt)
            a = a[inte:]
    return (a)




# from typing import Iterable


# def remove_all_before(items: list, border: int) -> Iterable:
#     # your code here
    
#     return items[items.index(border):] if border in items else items