// 0204_07ConstItrExam.cpp : This file contains the 'main' function. Program execution begins and ends there.
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
    cout << "]\n" << endl;
}
template <typename T>
void print_vector_range_based(vector<T>& vec)
{
    for (const auto& elem : vec)
    {
        cout << elem << endl;
    }
}

int main()
{
    vector<int> vec;
    vec.push_back(10);
    vec.push_back(20);
    vec.push_back(30);
    vec.push_back(40);
    vec.push_back(20);
    cout << "initiated status vector" << endl;
    PrintVector(vec);

    vector<int>::iterator itr = vec.begin() + 2;    //vec[2
    *itr = 50;
    cout << "===============================================" << endl;
    PrintVector(vec);

    vector<int>::const_iterator citr = vec.begin() + 1;
    
    //unable to const iterator value change
    //*citr = 70;

    cout << "===========================" << endl;
    cout << "reverse vector print" << endl;
    vector<int>::reverse_iterator ritr = vec.rbegin();
    cout << "[";
    for (; ritr != vec.rend(); ritr++)
    {
        cout << *ritr << " ";
    }
    cout << "]\n";

    vector<int> nVector;
    nVector.push_back(1);
    nVector.push_back(2);
    nVector.push_back(3);
    nVector.push_back(4);

    // reverse print
    //for (vector<int>::size_type i = nVector.size() - 1; i >= 0; i--)
    //{
    //    cout << "nVerctor[" << i << "] : ";
    //    cout << nVector[i] << endl;
    //};

    for (int elem : nVector)
    {
        cout << "element : " << elem << endl;
    }
    print_vector_range_based(nVector);
    
    auto nNum = 10;
    auto strHello = "Hello";

    cout << typeid(nNum).name() << endl;
    cout << typeid(strHello).name() << endl;
   
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
