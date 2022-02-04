// 0204_06CautionItrExam.cpp : This file contains the 'main' function. Program execution begins and ends there.
//

#include <iostream>
#include <vector>

using namespace std;
template <typename T>
void PrintVector(vector<T>& vc)
{
    //print all vector elements
    cout << "[ ";
    for (typename vector<T>::iterator itr = vc.begin(); itr != vc.end(); ++itr)
    {
        cout << *itr << " ";
    }
    cout << "]" << endl;
}
int main()
{
    vector<int> vec;
    vec.push_back(10);
    vec.push_back(20);
    vec.push_back(30);
    vec.push_back(40);
    vec.push_back(20);

    cout << "first status vector" << endl;
    PrintVector(vec);

    //vector<int>::iterator itr = vec.begin();
    //vector<int>::iterator endItr = vec.end();

    //for (; itr != endItr; ++itr)
    //{
    //    if (*itr == 20)
    //    {
    //        vec.erase(itr);
    //    }
    //}

    //효율적인 방법
    for (vector<int>::size_type i = 0; i != vec.size(); i++)
    {
        if (vec[i] == 20)
        {
            vec.erase(vec.begin() + i);
            i--;
        }
    }

    cout << "value 20 delete" << endl;
    PrintVector(vec);
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
