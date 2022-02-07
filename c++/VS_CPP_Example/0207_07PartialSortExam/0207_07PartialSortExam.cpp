// 0207_07PartialSortExam.cpp : This file contains the 'main' function. Program execution begins and ends there.
//

#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

template <typename T>
void PrintVector(T begin, T end)
{
    while (begin != end)
    {
        cout << *begin << " ";
        begin++;
    }
    cout << "\n";
}

int main()
{
    vector<int> vec;
    vec.push_back(5);
    vec.push_back(2);
    vec.push_back(3);
    vec.push_back(1);
    vec.push_back(4);
    vec.push_back(8);
    vec.push_back(9);
    vec.push_back(7);
    vec.push_back(3);
    vec.push_back(2);
    vec.push_back(5);
    vec.push_back(8);
    vec.push_back(5);

    cout << "Before sorting \n";
    PrintVector(vec.begin(), vec.end());

    partial_sort(vec.begin(),  vec.begin() + 3, vec.end(), greater<int>());
    cout << "After greater partial sorting\n";
    PrintVector(vec.begin(), vec.end());    
    
    partial_sort(vec.begin(), vec.begin() + 3, vec.end(), less<int>());
    cout << "After less partial sorting\n";
    PrintVector(vec.begin(), vec.end());

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
