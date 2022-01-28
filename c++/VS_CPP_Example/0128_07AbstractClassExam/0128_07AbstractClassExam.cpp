// 0128_06AbstractClassExam.cpp : This file contains the 'main' function. Program execution begins and ends there.
//

#include <iostream>

using namespace std;

class CAnimal
{
public:
    virtual ~CAnimal() {};
    virtual void Cry() = 0;
};

class CDog :public CAnimal
{
public:
    virtual void Cry()
    {
        cout << "Bow Wow" << endl;
    }
};

class CCat :public CAnimal
{
public:
    void Cry()
    {
        cout << "Meow Meow" << endl;
    }
};

int main()
{
    CAnimal* animal;

    CDog myDog;
    myDog.Cry();
    CCat myCat;
    myCat.Cry();

    animal = &myDog;
    animal->Cry();
    animal = &myCat;
    animal->Cry();
    return 0;
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
