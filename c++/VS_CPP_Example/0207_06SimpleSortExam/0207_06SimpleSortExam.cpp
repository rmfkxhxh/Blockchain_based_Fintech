// 0207_06SimpleSortExam.cpp : This file contains the 'main' function. Program execution begins and ends there.
//

#include <iostream>
#include <vector>
#include <algorithm>
#include <functional>

using namespace std;

template <typename T>
void PrintVector(T begin, T end)
{
    while (begin != end)
    {
        cout << *begin << " ";
        begin++;
    }
    cout << endl;
}
class IntCompare
{
public :
    bool operator()(const int& a, const int& b) const { return (a > b); } // descending sorting operator
};

template <typename T1,typename T2>
class GreaterComp
{
public :
    bool operator()(const T1& a, const T2& b) const { return (a > b); } // descending sorting operator
};
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
    //std::cout << "Hello World!\n";

    cout << "Before sorting \n";
    PrintVector(vec.begin(), vec.end());
    
    sort(vec.begin(), vec.end(), IntCompare());
    cout << "After intcomp sorting\n";
    PrintVector(vec.begin(), vec.end());

    sort(vec.begin(), vec.end(), GreaterComp<int, int>());
    cout << "After Greatercomp sorting\n";
    PrintVector(vec.begin(), vec.end());

    sort(vec.begin(), vec.end(), less<int>());
    cout << "After less sorting\n";
    PrintVector(vec.begin(), vec.end());

    sort(vec.begin(), vec.end(), greater<int>());
    cout << "After greater sorting\n";
    PrintVector(vec.begin(), vec.end());


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
