// 0128_05StaticVariableExam.cpp : This file contains the 'main' function. Program execution begins and ends there.
//

#include "Person.h"

int main()
{
    CPerson* pLas = new CPerson("Las Ulich", 50);
    CPerson* pJames = new CPerson("James Hettfield", 48);
    CPerson* pKird = new CPerson("Kird Hamet", 40);
    CPerson* pRobert = new CPerson("Robert Trujilo", 51);

    //cout << "Currently created number of people : " << CPerson::PersonCount() << endl;
    cout << "Currently created number of people : " << pLas->PersonCount() << endl;
    //std::cout << "Hello World!\n";

    if (pLas != NULL) delete pLas;
    //cout << "Currently created number of people : " << CPerson::PersonCount() << endl;
    if (pJames != NULL) delete pJames;
    //cout << "Currently created number of people : " << CPerson::PersonCount() << endl;
    if (pKird != NULL) delete pKird;
    //cout << "Currently created number of people : " << CPerson::PersonCount() << endl;
    if (pRobert != NULL) delete pRobert;
    //cout << "Currently created number of people : " << CPerson::PersonCount() << endl;
    //cout << sizeof(CPerson) << endl;
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
