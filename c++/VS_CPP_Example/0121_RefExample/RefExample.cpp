// RefExample.cpp : This file contains the 'main' function. Program execution begins and ends there.
//

#include <iostream>
#include <string>

using namespace std;

void abc(int& x)
{
    x = 100;
    cout << "x: " << x << "x addr : " << &x << endl;
}

int main()
{
    string food = "Pizza"; //&food(주소)에 pizza값을 할당
    string &meal = food; // &meal(주소)에 &food(주소)를 할당
    meal = "Hamburger"; // &meal(주소)에 hamburger값을 할당

    cout << food << " food address: " << &food << endl;

    cout << meal << " meal address: " << &meal << endl;

    int xx = 200;
    cout << xx << "xx addr : " << &xx << endl;
    abc(xx);
    cout << "xx: " << xx << "xx addr: " << &xx << endl;
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
