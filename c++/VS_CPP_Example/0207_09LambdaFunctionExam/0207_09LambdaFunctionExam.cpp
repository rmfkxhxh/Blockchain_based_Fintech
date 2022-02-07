// 0207_09LambdaFunctionExam.cpp : This file contains the 'main' function. Program execution begins and ends there.
//

#include <string>
#include <vector>
//#include <functional>
//#include <algorithm>
#include <iostream>

using namespace std;

template <typename T>
void PrintVector(T begin, T end)
{
    while (begin != end)
    {
        cout << "[ " << *begin << " ] ";
        begin++;
    }
    cout << endl;
}

class LambdaTest
{
private:
    vector<int> vec;
    int nNumErased;
public:
    LambdaTest()
    {
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
        vec.push_back(4);

        nNumErased = 0;

        vec.erase(::remove_if(vec.begin(), vec.end(),
            [this](int i) -> bool {
                if (this->nNumErased >= 2)
                    return false;
                else if (i % 2 == 1)
                {
                    this->nNumErased++;
                    return true;
                }
            }
            ), vec.end());
        PrintVector(vec.begin(), vec.end());
    }
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
    vec.push_back(4);

    cout << "Initial Status Vector" << endl;
    PrintVector(vec.begin(), vec.end());

    //cout << sizeof(vec);

    cout << "delete odd number in vector" << endl; 
    //auto func = [](int i) {return i % 2 == 1; };
    //cout << func(4) << endl;
    int numErasedCount = 0;
    vec.erase(remove_if(
        vec.begin(), vec.end(),
        /*[](int i)-> bool {return i % 2 == 1; }*/
        //[](int i) {return i % 2 == 1; }
        [&numErasedCount](int i) -> bool {
            if (numErasedCount >= 2)
                return false;
            else if (i % 2 == 1)
            {
                numErasedCount++;
                return true;
            }
        }
    ), vec.end());

    PrintVector(vec.begin(), vec.end());


    LambdaTest lTest;
    //std::cout << "Hello World!\n";
    return 0;
}
