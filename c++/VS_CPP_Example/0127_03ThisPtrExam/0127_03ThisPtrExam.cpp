// 0127_03ThisPtrExam.cpp : This file contains the 'main' function. Program execution begins and ends there.
//

#include "Book.h"

using namespace std;

int main()
{
    CBook web_book("Html+CSS", 350);
    CBook html_book("Learning Html in 21 Days", 200);
    CBook copiedBook(web_book);

    cout << "First Book's Title : " << web_book.m_strTitle << endl;
    cout << "First Book's Total Page : " << web_book.m_nTotalPages << endl;
    cout << "Copied Book's Title : " << copiedBook.m_strTitle << endl;
    cout << "Copied Book's Total Page : " << copiedBook.m_nTotalPages << endl;


    cout << web_book.ThickerBook(html_book).m_strTitle << endl;
    cout << html_book.ThickerBook(web_book).m_strTitle << endl;


    //std::cout << "Hello World!\n";
    return 0;
}

// Run program: Ctrl + F5 or Debug > Start Without Debugging menu
// Debug program: F5 or Debug > Start Debugging menu

// Tips for Getting Started: 
//   1. Use the Solution Explorer window to add/manage files
//   2. Use the Team Explorer window to connect to source control
//   3. Use the Output window to see build output and other messages
//   4. Use the Error List window to view errors
//   5. Go to Project > Add New Item to create new code files, or Project > Add Existing Item to add existing code files to the project
//   6. In the future, to open this project again, go to File > Open > Project and select the .sln file
