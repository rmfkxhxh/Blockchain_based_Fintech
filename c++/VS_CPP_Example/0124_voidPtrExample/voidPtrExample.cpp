// coidPtrExample.cpp : This file contains the 'main' function. Program execution begins and ends there.
//

#include <iostream>
#include ".\voidPtrExample.h"

using namespace std;

int main()
{
    char a = 'x';
    int b = 1024;

    increase(&a, sizeof(a));
    increase(&b, sizeof(b));

    cout << "a : " << a << ", b : " << b << endl;

    return 0;
}
void increase(void* pData, int nSize)
{
    if (nSize == sizeof(char))
    {
        char* pChar;
        pChar = (char*)pData; //type casting
        ++(*pChar);
    }
    else if (nSize == sizeof(int))
    {
        int* pInt;
        pInt = (int*)pData;
        ++(*pInt);
    }
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
