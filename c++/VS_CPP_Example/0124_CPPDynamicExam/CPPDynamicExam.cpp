// CPPDynamicExam.cpp : This file contains the 'main' function. Program execution begins and ends there.
//

#include <iostream>
using namespace std;

int main()
{
    //int* ptrInt = new int; //동적 할당 연산자
    //*ptrInt = 1024; //가르키는 방, ptrInt는 주소 값

    //double* ptrDouble = new double;
    //*ptrDouble = 3.142592;

    //cout << "Int type ptr value : " << *ptrInt << endl;
    //cout << "Double type ptr value : " << *ptrDouble << endl;
    //
    ////delete ptrInt;
    ////delete ptrDouble;

    //if (ptrInt != NULL)
    //{
    //    delete ptrInt;
    //    ptrInt = NULL;
    //}
    //if (ptrDouble != NULL)
    //{
    //    delete ptrDouble;
    //    ptrDouble = NULL;
    //}
    char* pChar = new char;
    *pChar = 'a';
    cout << "Memory address : " << (void*)pChar << "\t value : " << *pChar << endl;
    cout << "Heap size : " << sizeof(*pChar) << endl;

    if (pChar != NULL)
    {
        delete pChar;
        pChar = NULL;
    }

    int* pNum = new int;
    *pNum = 879;
    cout << "Memory address : " << (void*)pNum << "\t value : " << *pNum << endl;
    cout << "Heap size : " << sizeof(*pNum) << endl;

    if (pNum != NULL)
    {
        delete pNum;
        pNum = NULL;
    }

    float* pFloat = new float;
    *pFloat = 3.141592;
    cout << "Memory address : " << (void*)pFloat << "\t value : " << *pFloat << endl;
    cout << "Heap size : " << sizeof(*pFloat) << endl;

    if (pFloat != NULL)
    {
        delete pFloat;
        pFloat = NULL;
    }
    
    double* pDouble = new double;
    *pDouble = 3.141592;
    cout << "Memory address : " << (void*)pDouble << "\t value : " << *pDouble << endl;
    cout << "Heap size : " << sizeof(*pDouble) << endl;

    if (pDouble != NULL)
    {
        delete pDouble;
        pDouble = NULL;
    }

    
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
