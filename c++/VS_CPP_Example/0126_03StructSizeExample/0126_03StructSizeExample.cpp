// 0126_03StructSizeExample.cpp : This file contains the 'main' function. Program execution begins and ends there.
//

#include <iostream>

using namespace std;

#pragma pack(push, 1)
struct ExamSize
{
    char a;
    int b;
    double c;
};
#pragma pack(pop)

struct ExamSize1
{
    char a;
    int b;
    double c;
};

int main(int argc, char* argv[])
{
    cout << "Structure ExamSize's each member variable size : " << endl;
    cout << "char : " << sizeof(char) << ", int : " << sizeof(int) << ", double : " << sizeof(double) << endl;

    cout << "Size of structure : " << sizeof(ExamSize) << endl;
    ExamSize Exam1;
    cout << "struc char : " << sizeof(Exam1.a) << ", struc int : " << sizeof(Exam1.b) << ", struc double : " << sizeof(Exam1.c) << endl;
    cout << "Size of structure : " << sizeof(ExamSize1) << endl;
    //std::cout << "Hello World!\n";
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
