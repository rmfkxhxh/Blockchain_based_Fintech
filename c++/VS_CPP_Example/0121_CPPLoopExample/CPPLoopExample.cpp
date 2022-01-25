// CPPLoopExample.cpp : This file contains the 'main' function. Program execution begins and ends there.
//

#include <iostream>
#include <string>

using namespace std;

int main()
{
    int i = 0;

    //while (i < 10)
    //{
    //    cout << i << endl;
    //    i++;
    //}
    
    //do 
    //{
    //    cout << i << endl;
    //    i++;
    //} while (i < 10);

    //for (int i = 0; i < 10; i += 2)
    //{
    //    cout << "for 루프에여 : " << i << endl;
    //}

    //for (int n = 0, i = 100; n != i; n++, i--)
    //{
    //    cout << "n : " << n << ", i : " << i << endl;
    //}

    int nArr[5] = { 0001, 0003, 0005, 0007 , 9 };
    for (int nEle : nArr)
    {
        cout << "Range based for loop 이에여 " << "nEle : " << nEle << endl;
    }

    string str("Hello_World");
    //char str[] = "Hellow_World!!!\0";
    for (char c : str)
    {
        cout << "char for loop 이에여 c : " << c << endl;
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
