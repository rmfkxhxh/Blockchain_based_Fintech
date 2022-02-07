// 0207_01DequeExam.cpp : This file contains the 'main' function. Program execution begins and ends there.
//

#include <iostream>
#include <deque>

using namespace std;

template <typename T>
void PrintDeque(deque<T>& dq)
{
    cout << "[ ";
    for (const auto& ele : dq)
    {
        cout << ele << " ";
    }
    cout << "]\n" << endl;
}

int main()
{
    deque<int> dq;
    dq.push_back(10);
    dq.push_back(20);
    dq.push_back(30);
    dq.push_back(40);
    //std::cout << "Hello World!\n";
    cout << "initial status of deque :" << endl;
    PrintDeque(dq);

    cout << "delete front element : " << endl;
    dq.pop_front();
    PrintDeque(dq);

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
