// ArrPointerExample.cpp : This file contains the 'main' function. Program execution begins and ends there.
//

#include <iostream>

using namespace std;

int main()
{
    int arrNumber[5];
    int* ptrArr;
    ptrArr = arrNumber; *ptrArr = 10; //arrNumber[0]
    cout << ptrArr << endl;
    ptrArr++; *ptrArr = 20; //arrNumber[1]
    cout << ptrArr << endl;
    ptrArr = &arrNumber[2]; *ptrArr = 30;  //arrNumber[2]
    cout << ptrArr << endl;
    ptrArr = arrNumber + 3; *ptrArr = 40; //arrNumber[3] int 이기때문에 3byte만큼
    cout << ptrArr << endl;
    ptrArr = arrNumber; *(ptrArr + 4) = 50; //arrNumber[4]
    cout << ptrArr << endl;

    for (int i : arrNumber)
        cout << i << endl;

    //a[5] = 0; 두 표현식이 똑같다  a [offset of 5] = 0;
    //*(a + 5) = 0; pointed to by (a+5) = 0;



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
