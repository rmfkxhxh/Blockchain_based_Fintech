// 0125_NewDelArray.cpp : This file contains the 'main' function. Program execution begins and ends there.
//

#include <iostream>

using namespace std;

int main()
{
    int n;
    int* ptrNumber;

    cout << "How many inputs????" << endl;
    cin >> n;
    ptrNumber = new(nothrow) int[n]; //메모리 할당이 실패할때 bad_alloc exception을 주거나 nullptr을 반환한다.

    if (ptrNumber == nullptr)
    {
        cout << "Error memory could not be allocated...\n";
        exit(1);
    }
    else
    {
        for (int i = 0; i < n; i++)
        {
            cout << "Enter a number : "; cin >> ptrNumber[i];
        }
        cout << "you have entered : ";
        for (int i = 0; i < n; i++)
        {
            cout << ptrNumber[i] << ", ";
        }
        delete[] ptrNumber;
    }

    //cout << "Hello World!\n";
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
