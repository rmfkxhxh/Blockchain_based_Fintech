// 0204_08SimpleListExam.cpp : This file contains the 'main' function. Program execution begins and ends there.
//

#include <iostream>
#include <list>

using namespace std;

template <typename T>
void PrintList(list<T>& lst)
{
    cout << "[ ";
    for (const auto& ele : lst)
    {
        cout << ele << " ";
    }

    cout << "]\n" << endl;
}
int main()
{
    list<int> nList;

    nList.push_back(10);
    nList.push_back(20);
    nList.push_back(30);
    nList.push_back(40);

    cout << "initial  status at list" << endl;
    PrintList(nList);

    for (list<int>::iterator itr = nList.begin(); itr != nList.end(); ++itr)
    {
        if (*itr == 20)
        {
            nList.insert(itr, 50);
        }
    }
    cout << "insert 50 element value before 20" << endl;
    PrintList(nList);

    for (list<int>::iterator itr = nList.begin(); itr != nList.end(); ++itr)
    {
        if (*itr == 30)
        {
            nList.erase(itr);
            //break;
        }
    }
    cout << "erase 30 element" << endl;
    PrintList(nList);

    //for (list<int>::iterator itr = nList.begin(); itr != nList.end(); itr++)
    //{
    //    cout << *itr << endl;
    //}
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
