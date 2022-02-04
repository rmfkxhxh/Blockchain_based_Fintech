// 0204_03SimpleClassTemplateExam.cpp : This file contains the 'main' function. Program execution begins and ends there.
//

#include <iostream>
#include <string>

using namespace std;

template <typename T>
class CData
{
private:
    T m_data;

public:
    CData(T dt);
    T get_data();
};


int main()
{
    CData<string> strData("Learning C++");
    CData<int> nData(12);

    cout << "strData : " << strData.get_data() << endl;
    cout << "nData : " << nData.get_data() << endl;

    //std::cout << "Hello World!\n";
    return 0;
}

template <typename T>
CData<T>::CData(T dt)
{
    m_data = dt;

}

template <typename T>
T CData<T>::get_data()
{
    return m_data;
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
