#pragma once
#include <string>

using namespace std;

//#pragma pack(push,1)
//struct BooksInfo
//{
//    string m_Title;
//    string m_Author;
//    string m_Subject;
//    int m_BookId;
//};
//#pragma pack(pop)

class CBooks
{
public:
    //Booksinfo m_BooksInfo;
    string m_Title;
    string m_Author;
    string m_Subject;
    int m_BookId;

    void PrintBookInfo();
};

void CBooks::PrintBookInfo()
{
    cout << "Book Title : " << m_Title << endl;
    cout << "Book Author : " << m_Author << endl;
    cout << "Book Subject : " << m_Subject << endl;
    cout << "Book BookId : " << m_BookId << endl;
};

//class CBooks1
//{
//public:
//    void PrintBookInfo();
//};

//void CBooks1::PrintBookInfo()
//{
//    cout << "Book Title : "  << endl;
//    cout << "Book Author : " << endl;
//    cout << "Book Subject : " << endl;
//    cout << "Book BookId : " << endl;
//};