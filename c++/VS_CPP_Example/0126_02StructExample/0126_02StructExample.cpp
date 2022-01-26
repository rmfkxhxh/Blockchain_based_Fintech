#include <iostream>
#include <cstring>
#include "StructExam.h"

// moved to header file
//using namespace std;
//using namespace Bookinfo; 

int main()
{
    //struct Books Book1; //struct Book1 of type Book
    //struct Books Book2;
    Booksinfo::Books* Book1 = new Booksinfo::Books; // allocated in heap memory
    Books Book2; // allocated in stack memory

    //Book1 specifications
    //strcpy_s(Book1.title, "Learn C++ Programming in 21 Days");
    //strcpy_s(Book1.author, "Sieun Lee");
    //strcpy_s(Book1.subject, "C++ Programming in liquor");
    //Book1.book_id = 13423;    
    
    strcpy_s(Book1->title, _countof(Book1->title), "Learn C++ Programming in 21 Days");
    strcpy_s(Book1->author, _countof(Book1->author), "Sieun Lee");
    strcpy_s(Book1->subject, _countof(Book1->subject), "C++ Programming in liquor");
    Book1->book_id = 13423;

    //Book2 specifications
    //strcpy_s(Book2.title, "Learn C++ Programming in 21 Days");
    //strcpy_s(Book2.author, "Hyein Lee");
    //strcpy_s(Book2.subject, "C++ Programming in liquor");
    //Book2.book_id = 4322;    

    strcpy_s(Book2.title, _countof(Book2.title), "Learn C++ Programming in 21 Days");
    strcpy_s(Book2.author, _countof(Book2.author), "Hyein Lee");
    strcpy_s(Book2.subject, _countof(Book2.subject), "C++ Programming in liquor");
    Book2.book_id = 4322;

    //print Book1 info
    //cout << "Book1 title : " << Book1.title << endl;
    //cout << "Book1 author : " << Book1.author << endl;
    //cout << "Book1 subject : " << Book1.subject << endl;
    //cout << "Book1 book_id : " << Book1.book_id << endl;  

    /*PrintBookInfo(Book1);*/
    PrintBookInfoPtr(Book1);

    //print Book2 info
    //cout << "Book2 title : " << Book2.title << endl;
    //cout << "Book2 author : " << Book2.author << endl;
    //cout << "Book2 subject : " << Book2.subject << endl;
    //cout << "Book2 book_id : " << Book2.book_id << endl;

    //PrintBookInfo(Book2);
    PrintBookInfo(Book2);
    PrintBookInfoPtr(&Book2);


    struct Books Book3 = SetBooksInfo((char*)"Welcome to C++ Hell", (char*)"Bjane stroustoup", (char*)"Hell in the C++", (int)32159);
    //(char*)"Welcome to C++ Hell" -> stack에 있는 문자열 주소를 넘겨주겟다. 
    PrintBookInfo(Book3);
    PrintBookInfoPtr(&Book3);


    //std::cout << "Hello World!\n";
    delete Book1;
    //delete Book2;

    return 0;
}
//



