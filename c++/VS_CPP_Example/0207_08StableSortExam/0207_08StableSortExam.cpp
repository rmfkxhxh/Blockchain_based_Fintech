// 0207_08StableSortExam.cpp : This file contains the 'main' function. Program execution begins and ends there.
//

#include <iostream>
#include <algorithm>
#include <functional>
#include <string>
#include <vector>

using namespace std;

template <typename T>
void PrintVector(T begin, T end)
{
    while (begin != end)
    {
        cout << "[" << *begin << "]";
        begin++;
    }
    cout << "\n" << endl;
}

class CUser
{
private:
    string m_name;
    int m_age;
public:
    CUser(string name, int age) 
        : m_name(name), 
        m_age(age) 
    {}

    bool operator<(const CUser& u) const { return (m_age < u.m_age); } //내림차순
    friend ostream& operator<<(ostream& o, const CUser& u);
};

ostream& operator<<(ostream& o, const CUser& u)
{
    o << u.m_name << ", " << u.m_age;
    return o;
}

int main()
{
    vector<CUser> vec;
    for (int i = 0; i < 100; i++)
    {
        string name = "";
        name.push_back('a' + i / 26);
        name.push_back('a' + i % 26);

        vec.push_back(CUser(name, static_cast<int>(rand() % 10)));

    }

    vector<CUser> vec2 = vec;

    cout << "Before sort" << endl;
    PrintVector(vec.begin(), vec.end());

    sort(vec.begin(), vec.end());
    cout << "After sort" << endl;
    PrintVector(vec.begin(), vec.end());

    cout << "Stable sort" << endl;
    stable_sort(vec2.begin(), vec2.end());
    PrintVector(vec2.begin(), vec2.end());
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
