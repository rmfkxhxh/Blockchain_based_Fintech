// 0128_08AbstractDataExam.cpp : This file contains the 'main' function. Program execution begins and ends there.
//

#include <iostream>

using namespace std;

class Adder
{
public:
    Adder(int i = 0) // constructer with default i
    {
        total = i;
    }
    
    void addNum(int number) // interface to outside world
    {
        total += number;
    }

    int getTotal() // interface to outside world
    {
        return total;
    }
private:
    // hidden data from outside world
    int total;
};
int main()
{
    Adder add(1);
    add.addNum(10);
    add.addNum(20);
    add.addNum(30);
    cout << "Total : " << add.getTotal() << endl;
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
