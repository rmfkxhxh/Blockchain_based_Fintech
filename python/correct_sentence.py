def correct_sentence(text: str) -> str:
    """
        returns a corrected sentence which starts with a capital letter
        and ends with a dot.
    """
    if not text[0].isupper():
        text = text.replace(text[0], text[0].upper(), 1)
    if not text[-1] == '.':
        text += '.'


    # your code here
    return text



# if __name__ == '__main__':
#     print("Example:")
#     print(correct_sentence("greetings, friends"))
    
#     # These "asserts" are used for self-checking and not for an auto-testing
#     assert correct_sentence("greetings, friends") == "Greetings, friends."
#     assert correct_sentence("Greetings, friends") == "Greetings, friends."
#     assert correct_sentence("Greetings, friends.") == "Greetings, friends."
#     assert correct_sentence("hi") == "Hi."
#     assert correct_sentence("welcome to New York") == "Welcome to New York."