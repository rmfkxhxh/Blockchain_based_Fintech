// 0128_02EncapsulationExam.cpp : This file contains the 'main' function. Program execution begins and ends there.
//

#include <iostream>

using namespace std;

class CEmployee
{
private:
    int m_salary;
public:
    CEmployee()
    {
        cout << "CEmployee Constructor\n";
        m_salary = 0;
    }
    ~CEmployee()
    {
        cout << "CEmployee Destructor\n";
        //do smth when deallocated from memory;
    }
    void setSalary(int salary)
    {
        m_salary = salary;
    }
    int getSalary()
    {
        return m_salary;
    }
};

int main()
{
    CEmployee* pEmployee = new CEmployee();

    pEmployee->setSalary(6000000);
    cout << pEmployee->getSalary() << endl;
    //std::cout << "Hello World!\n";
    if (pEmployee != NULL)
    {
        cout << "Pointer is not null, will be deleted\n";
        delete pEmployee;
        pEmployee = NULL;
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
