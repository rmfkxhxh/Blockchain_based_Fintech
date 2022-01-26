// 0126_04BasicClassExam.cpp : This file contains the 'main' function. Program execution begins and ends there.
//

#include <iostream>
#include "Books.h"
#include "Car.h"

int main()
{
    CBooks booksObj;
    booksObj.m_Title = "Learning C++ in 21 Days";
    booksObj.m_Author = "Sieun Lee";
    booksObj.m_Subject = "Learning C++ Programming";
    booksObj.m_BookId = 19980225;

    booksObj.PrintBookInfo(); // call method
    cout << sizeof(CBooks) << endl;

    CBooks cppBook;
    cppBook.m_Title = "Learning C++ in Hell";
    cppBook.m_Author = "Hades";
    cppBook.m_Subject = "Learning C++ Programming in Olympus";
    cppBook.m_BookId = 20210225;

    CCar carObj;
    carObj.m_strCompany = "BMW";
    carObj.m_strCarName = "X5";
    carObj.m_strCarNo = "NY3456";
    carObj.PrintCarInfo();

    //std::cout << "Hello World!\n";
}