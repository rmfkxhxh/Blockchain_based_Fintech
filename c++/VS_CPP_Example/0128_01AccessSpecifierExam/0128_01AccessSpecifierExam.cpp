// 0128_01AccessSpecifierExam.cpp : This file contains the 'main' function. Program execution begins and ends there.
//

#include <iostream>

using namespace std;

class CBox
{
protected:
    double m_width;
};

class CSmallBox :public CBox
{
public:
    void SetSmallWidth(double width);
    double GetSmallWidth();
};



void CSmallBox::SetSmallWidth(double width)
{
    m_width = width;
}
double CSmallBox::GetSmallWidth()
{
    return m_width;
}
int main()
{
    CSmallBox* smallBox = new CSmallBox();

    smallBox->SetSmallWidth(5.14);
    cout << smallBox->GetSmallWidth() << endl;
    //std::cout << "Hello World!\n";
    delete smallBox;
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
