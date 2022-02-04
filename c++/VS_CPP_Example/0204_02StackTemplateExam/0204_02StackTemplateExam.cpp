// 0204_02StackTemplateExam.cpp : This file contains the 'main' function. Program execution begins and ends there.
//

#include <iostream>
#include <vector>
#include <cstdlib>
#include <string>
#include <stdexcept>

using namespace std;

template <class T> 
class CStack
{
private:
    vector<T> elements;

public:
    void push(T const&);    // push element
    void pop();             // pop element
    T top() const;          // return top element
    
    // vector empty check function
    bool empty() const {
        return elements.empty();
    }
};


int main()
{
    try
    {
        CStack<int>     nStack;     // integer stack 
        CStack<string>  strStack;   // string stack

        // manipulate integer stack
        nStack.push(25);
        cout << "nStack top element : " << nStack.top() << endl;

        // mainpulate string stack
        strStack.push("Hello Stack~~");
        strStack.push("Hello C++~~");
        strStack.push("Hello World~~");
        strStack.pop();
        cout << "strStack top element : " << strStack.top() << endl;

        strStack.pop();
        cout << "strStack top element : " << strStack.top() << endl;

    }
    catch (const std::exception& ex)
    {
        cerr << "Exception : " << ex.what() << endl;
        return -1;
    }

    //std::cout << "Hello World!\n";
    return 0;
}

template <class T>
void CStack<T>::push(T const& elem)
{
    elements.push_back(elem);
}

template <class T>
void CStack<T>::pop()
{
    if (elements.empty())
    {
        throw out_of_range("CStack<T>::pop() : empty stack");
    }

    //remove last(top) element
    elements.pop_back();
}

template <class T>
T CStack<T>::top() const
{
    if (elements.empty())
    {
        throw out_of_range("CStack<T>::top() : empty stack");
    }

    //return copy of last(top) element
    return elements.back();
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
