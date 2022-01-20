// CPPOperators.cpp : This file contains the 'main' function. Program execution begins and ends there.
//

#include <iostream>
#include <bitset>

using namespace std;

int main()
{
    int x = 100 + 200;
    int y = x + 400;
    float z = float(y) / float(x);
    int xx = y % x;
    //cout << "x : " << x << endl;
    printf("x : %d, y : %d, z : %f, xx : %d \n", x, y, z, xx);

    int nNumber = 10;
    nNumber -= 25;

    cout << "nNumber : " << nNumber << endl;

    int isX = 10, isY = 7;

    cout << "return value : " << (isX == isY) << endl;

    // 60 : 0011 1100, 13 : 0000 1110
    //       32  16   8  4  0  0
    //  1100 0011 -> 195 -> -61
    //  - 64 0 0 0 0 2 1 
    unsigned char A = 60, B = 14;
    cout << "A & B : " << bitset<8>(A & B) << endl;
    cout << "A | B : " << bitset<8>(A | B) << endl;
    cout << "A ^ B : " << bitset<8>(A ^ B) << endl;
    cout << "~A : " << bitset<8>(~A) << endl;

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
