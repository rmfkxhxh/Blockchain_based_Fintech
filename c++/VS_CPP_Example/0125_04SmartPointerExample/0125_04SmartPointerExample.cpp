// 0125_04SmartPointerExample.cpp : This file contains the 'main' function. Program execution begins and ends there.
//

#include <iostream>
#include <memory>

using namespace std;

class CPerson 
{
private:
    string strName;
    int nAge;
public:
    CPerson(const string& name, int age);
    ~CPerson() { cout << "Object Destructor" << endl; }
    void ShowPersonInfo();
};

int main()
{
    //unique_ptr<CPerson> ptrPerson = make_unique<CPerson>("James Hetfield", 39); //heap에 호출하지만, 
    shared_ptr<CPerson> ptrPerson = make_shared<CPerson>("James Hetfield", 39); //heap에 호출하지만, 
    cout << "Currently Owned Count : " << ptrPerson.use_count() << endl;
    auto james = ptrPerson;
    cout << "Currently Owned Count : " << ptrPerson.use_count() << endl;
    ptrPerson->ShowPersonInfo();
    cout << "Currently Owned Count : " << ptrPerson.use_count() << endl;
    ptrPerson->ShowPersonInfo();
    james.reset();
    cout << "Currently Owned Count : " << ptrPerson.use_count() << endl;

    //std::cout << "Hello World!\n";
    return 0;
}

CPerson::CPerson(const string& name, int age)
{
    strName = name;
    nAge = age;
    cout << "Object Constructor!!!!" << endl;
}

void CPerson::ShowPersonInfo()
{
    cout << strName << "'s age is " << nAge << endl;
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
