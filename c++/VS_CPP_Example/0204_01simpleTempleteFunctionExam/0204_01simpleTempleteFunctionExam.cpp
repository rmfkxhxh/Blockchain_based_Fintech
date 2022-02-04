// 0204_01simpleTempleteFunctionExam.cpp : This file contains the 'main' function. Program execution begins and ends there.
//

#include <iostream>
#include <string>
#include <any>

using namespace std;

template <typename T> //typename keyword in 98version
void Swap(T& a, T& b);

template <> 
void Swap<double>(double&, double&);

template <typename T>
T const& Max(T const& a, T const& b);

int main()
{
    int c = 12, d = 64;
    cout << "before Swap :" << endl;
    cout << c << ", " << d << endl;
    Swap(c, d);
    cout << "after Swap :" << endl;
    cout << c << ", " << d << endl;

    double x = 12.45, y = 45.164;
    cout << "before Swap :" << endl;
    cout << x << ", " << y << endl;
    Swap(x, y);
    cout << "after Swap :" << endl;
    cout << x << ", " << y << endl;
    //std::cout << "Hello World!\n";

    string strA = "Hello, ", strB = "World~~~";
    cout << "before Swap :" << endl;
    cout << strA << ", " << strB << endl;
    Swap(strA, strB);
    cout << "after Swap :" << endl;
    cout << strA << ", " << strB << endl;

    cout << "Integet Max Value : " << Max(c, d) << endl;
    cout << "Double Max Value : " << Max(x, y) << endl;
    cout << "String Max Value : " << Max(strA, strB) << endl;

    return 0;
}

template <typename T> //typename keyword in 98version
void Swap(T& a, T& b) 
{
    T temp;
    temp = a;
    a = b;
    b = temp;
};

template <> 
void Swap<double>(double& a, double& b)
{
    //nothing
    // or do smth else for double
}

template <typename T>
T const& Max(T const& a, T const& b)
{
    return a < b ? b : a;
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
