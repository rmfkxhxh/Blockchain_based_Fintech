#pragma once

using namespace std;

namespace Booksinfo 
{
    //struct Books
    //{
    //    char title[50];
    //    char author[50];
    //    char subject[100];
    //    int book_id;
    //};

    typedef struct Books
    {
        char title[50];
        char author[50];
        char subject[100];
        int book_id;
    } BooksTag; //alias Tag

    void PrintBookInfo(BooksTag book)
    {
    //print Book info
    cout << "Book title : " << book.title << endl;
    cout << "Book author : " << book.author << endl;
    cout << "Book subject : " << book.subject << endl;
    cout << "Book book_id : " << book.book_id << endl;
    return;
    };
    void PrintBookInfoPtr(BooksTag* book)
    {
        //print Book info
        cout << "Book title : " << book->title << endl;
        cout << "Book author : " << book->author << endl;
        cout << "Book subject : " << book->subject << endl;
        cout << "Book book_id : " << book->book_id << endl;
        return;
    };

    BooksTag SetBooksInfo(char* title, char* author, char* subject, int book_id)
    {
        BooksTag book;
        strcpy_s(book.title, _countof(book.title), title);
        strcpy_s(book.author, _countof(book.author), author);
        strcpy_s(book.subject, _countof(book.subject), subject);
        book.book_id = book_id;

        //strcpy_s(book->title, _countof(book->title), "Learn C++ Programming in 21 Days");
        //strcpy_s(book->author, _countof(book->author), "Sieun Lee");
        //strcpy_s(book->subject, _countof(book->subject), "C++ Programming in liquor");
        //book->book_id = 13423;

        return book;


    };
};

using namespace Booksinfo;