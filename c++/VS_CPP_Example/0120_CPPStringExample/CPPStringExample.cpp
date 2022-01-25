// CPPStringExample.cpp : This file contains the 'main' function. Program execution begins and ends there.
//

#include <iostream>
#include <string>

using namespace std;

int main()
{
    string firstName = "James";
    string lastName = "Hetfield";
    string equip = "ESP Explorer Guitar";
    //char aA[100] = "A";
    //string concat
    string fullNameEquip = firstName + ' ' + lastName + ", " + equip;

    cout << fullNameEquip << endl;

    string fullName = firstName.append(" ").append(lastName.append(", ")).append(equip);

    cout << fullName << endl;

    string strAlphabet = "ABCDefgHIJKlmnopQRStuvWXyZ";
    cout << "strAlphabet lenght : " << strAlphabet.length() << endl;
    cout << "strAlphabet lenght : " << strAlphabet.size() << endl;

    string strHello = "Hello world!~@~!";
    cout << strHello[0] << endl;
    strAlphabet[5] = '5';
    for (int i = 0; i < strAlphabet.size(); i++) 
    {
        cout << strAlphabet[i];
    }
    cout << endl;
    
    string baseballTeam;
    cout << "Enter your favorite baseball team : ";
    getline(cin, baseballTeam);

    cout << baseballTeam << endl;

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
