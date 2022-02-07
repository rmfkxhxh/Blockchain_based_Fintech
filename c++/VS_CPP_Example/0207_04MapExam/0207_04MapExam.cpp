// 0207_04MapExam.cpp : This file contains the 'main' function. Program execution begins and ends there.
//

#include <iostream>
#include <map>
#include <string>

using namespace std;

template <typename K, typename V>
void PrintMapElement(map<K, V>& m)
{
    for (auto itr = m.begin(); itr != m.end(); ++itr)
    {
        cout << itr->first << ", " << itr->second << endl;
    }
}

template <typename K, typename V>
void SearchPrintElement(map<K, V>& m, K key)
{
    auto itr = m.find(key);
    if (itr != m.end())
    {
        cout << key << "  => " << itr->second << endl;
    }
    else
    {
        cout << key << " is not found in map." << endl;
    }
}
int main()
{
    map<string, double> pitcherList;

    pitcherList.insert(pair<string, double>("Kershaw", 0.12));
    pitcherList.insert(pair<string, double>("DDung", 7.89));
    pitcherList.insert(pair<string, double>("Otani", 5.34));

    pitcherList.insert(make_pair("ChanHo", 2.12));
    pitcherList.insert(make_pair("SunWoo", 3.14));
    pitcherList.insert(make_pair("KwangHyun", 3.55));

    pitcherList["DongRyul"] = 3.45;
    pitcherList["Dongwon"] = 1.67;
    pitcherList["Choochoo"] = 2.51;

    PrintMapElement(pitcherList);

    cout << "Chanho's ERA : " << pitcherList["ChanHo"] << endl;
    pitcherList["Choochoo"] = 7.86;
    cout << "Choochoo's ERA : " << pitcherList["Choochoo"] << endl;

    SearchPrintElement(pitcherList, (string)"ChaBoom");
    SearchPrintElement(pitcherList, (string)"SunWoo");
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
