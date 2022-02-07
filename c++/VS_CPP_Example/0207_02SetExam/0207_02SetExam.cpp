// 0207_02SetExam.cpp : This file contains the 'main' function. Program execution begins and ends there.
//

#include <iostream>
#include <set>

using namespace std;

template <typename T>
void PrintSetElement(set<T>& st)
{
    cout << "[";
    for (typename set<T>::iterator itr = st.begin(); itr != st.end(); ++itr)
    {
        cout << *itr << " ";
    }
    cout << "]\n" << endl;
}

int main()
{
    set<int> s;
    s.insert(10);
    s.insert(40);
    s.insert(50);
    s.insert(20);
    s.insert(30);

    cout << "Initial status set : sorted print : " << endl;
    PrintSetElement(s);

    cout << "20 is s element ? :: ";
    set<int>::iterator itr = s.find(20);
    //auto itr = s.find(20);
    if (itr != s.end())
    {
        cout << "Yes" << endl;
    }
    else 
    {
        cout << "No" << endl;
    }

    cout << "25 is s element ? :: ";
    itr = s.find(25);
    if (itr != s.end())
    {
        cout << "Yes" << endl;
    }
    else
    {
        cout << "No" << endl;
    }

    //auto intA = 50;
    //auto strA = "String";
    //cout << intA << "\n" << strA << endl;

    set<int> nSet;
    nSet.insert(10);
    nSet.insert(20);
    nSet.insert(10);
    nSet.insert(10);
    nSet.insert(20);
    nSet.insert(40);

    cout << "nSet : " << endl;
    PrintSetElement(nSet);

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
