// 0204_04SimpleVetorExam.cpp : This file contains the 'main' function. Program execution begins and ends there.
//

#include <iostream>
#include <vector>

using namespace std;

int main()
{
    vector<int> vec;

    vec.push_back(10);
    vec.push_back(20);
    vec.push_back(30);
    vec.push_back(40);
    //vec.pop_back();
    //vec[3] = 50;
    //cout << vec[3] << endl;
    for (vector<int>::size_type i = 0; i < vec.size(); i++)
    {
        cout << "vec" <<  i << ": " << vec[i] << endl;
    }     
    
    
    for (vector<int>::iterator itr = vec.begin(); itr != vec.end(); ++itr)
    {
        cout << "vector itr : " << *itr << endl;
    }    

    vector<int>::iterator itr = vec.begin() + 2;
    cout << "third element : " << *itr << endl;
    //cout << sizeof(vec) << endl;
    //for (int i = 0; i < vec.size(); i++)
    //{
    //    cout << "vec" <<  i << ": " << vec[i] << endl;
    //}
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
