// 0125_05FucExam.cpp : This file contains the 'main' function. Program execution begins and ends there.
//

#include <iostream>

using namespace std;

void HelloFunc()
{
    cout << "Welcome to C++ Hell~!@!~@~!@!~" << endl;
}
void HelloWorldFunc(string strName)
{
    cout << "Hello " << strName << endl;
}
void WhereAreYouFrom( int nAge, string strName, string country = "한국")
{
    cout << "My name is " << strName << " and my age is " << nAge << "!!!" << endl;
    cout << "I am from " << country << endl;
}
int HowOldAreYou(int nAge)
{
    int age = nAge;
    return age;
}
void SwapInt(int& x, int& y)
{
    int temp = x;
    cout << "swapping intergers" << endl;
    x = y;
    y = temp;

}
int main()
{
    string t = "TaeHyun!";

    HelloFunc();
    HelloWorldFunc("SiEun!!!");
    HelloWorldFunc("HyeJin!!");
    HelloWorldFunc(t);
    WhereAreYouFrom(50, "민수");
    WhereAreYouFrom(30, "민수", "화성");

    cout << "My age : " << HowOldAreYou(25) << endl;
    int nFirst = 400, nSecond = 4;
    
    cout << "Before nFirst: " << nFirst << ", Before nSecond : " << nSecond << endl;
    SwapInt(nFirst, nSecond);
    cout << "After nFirst: " << nFirst << ", After nSecond : " << nSecond << endl;
    
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
