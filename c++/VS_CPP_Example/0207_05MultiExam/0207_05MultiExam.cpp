// 0207_05MultiExam.cpp : This file contains the 'main' function. Program execution begins and ends there.
//

#include <iostream>
#include <map>
#include <set>
#include <string>

using namespace std;

template <typename T>
void PrintMultiSet(const multiset<T>& ms)
{
    for (const auto& ele : ms)
    {
        cout << ele << " ";
    }
    cout << endl;
}

template <typename K, typename V>
void PrintMultiMap(const multimap<K, V>& mm)
{
    for (const auto& kv : mm)
    {
        cout << kv.first << ", " << kv.second << endl;
    }
}

int main()
{
    multiset<string> ms;
    ms.insert("a");
    ms.insert("b");
    ms.insert("a");
    ms.insert("c");
    ms.insert("d");
    ms.insert("c");

    PrintMultiSet(ms);
    cout << "============================================\n";
    multimap<int, string> mm;
    mm.insert(make_pair(1, "Hello World"));
    mm.insert(make_pair(1, "Good morning C++"));
    mm.insert(make_pair(2, "hello React"));
    mm.insert(make_pair(1, "hChau Javascript"));
    mm.insert(make_pair(2, "Aha Hi nodejs"));

    PrintMultiMap(mm);

    cout << "------------------------\n";
    cout << mm.find(1)->second << endl;

    cout << "++++++++++++++++++++++++++++++++++\n";
    auto range = mm.equal_range(1);
    for (auto itr = range.first; itr != range.second; ++itr)
    {
        cout << itr->first << " : " << itr->second << endl;
    }
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
