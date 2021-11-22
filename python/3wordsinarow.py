def checkio(words: str) -> bool:
    count = 0
    li = words.split()
    for i in li:
        if i.isnumeric():
            count = 0
        else:
            count += 1
        if count == 3:
            return True
    return False
    


#These "asserts" using only for self-checking and not necessary for auto-testing
if __name__ == '__main__':
    print('Example:')
    print(checkio("Hello World hello"))
    
    assert checkio("Hello World hello") == True, "Hello"
    assert checkio("He is 123 man") == False, "123 man"
    assert checkio("1 2 3 4") == False, "Digits"
    assert checkio("bla bla bla bla") == True, "Bla Bla"
    assert checkio("Hi") == False, "Hi"