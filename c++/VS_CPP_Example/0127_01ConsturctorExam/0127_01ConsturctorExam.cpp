// 0127_01ConsturctorExam.cpp : This file contains the 'main' function. Program execution begins and ends there.
//

#include <iostream>
#include <string>

using namespace std;

class CCar {
public:
    CCar();
    CCar(string brand, string name, int year);

    string m_strBrand;
    string m_strName;
    int m_nYear;
};

CCar::CCar()
{
};

CCar::CCar(string brand, string name, int year)
{
    m_strBrand = brand;
    m_strName = name;
    m_nYear = year;
};

int main()
{
    CCar bmwCar("BMW", "X5", 2002);
    CCar audiCar("Audi", "A8", 2012);

    cout << bmwCar.m_strBrand << " : " << bmwCar.m_strName << ", " << bmwCar.m_nYear << endl;
    cout << audiCar.m_strBrand << " : " << audiCar.m_strName << ", " << audiCar.m_nYear << endl;
    //std::cout << "Hello World!\n";
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
