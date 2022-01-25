// ArrayExam.cpp : This file contains the 'main' function. Program execution begins and ends there.
//

#include <iostream>
#include <string>

using namespace std;

int main()
{
    int grade[] = { 85, 65, 90 };
    int& refGrade = grade[0];
    for (int i = 0; i < 3; i++)
    {
        cout << "refGrade : " << refGrade + i << endl;
    }

    cout << grade << endl;
    for (int i = 0; i < 3; i++)
    {
        cout << &grade[i] << endl;
    }

    string itCompany[] = { "Apple", "Microsoft", "IBM", "Amazaon", "ESP Guitar" };
    cout << itCompany[4] << endl;
    itCompany[0] = "Snakebyte Guitar";
    for (string str : itCompany)
    {
        cout << str << endl;
    }
    int nNumber[] = { 12, 34, 54, 56 };
    for (int i = 0; i < (sizeof(nNumber)) / (sizeof(nNumber[0])); i++)
        cout << "sizeof nNumber" <<  "[" << i << "] : " << nNumber[i] << endl;

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
