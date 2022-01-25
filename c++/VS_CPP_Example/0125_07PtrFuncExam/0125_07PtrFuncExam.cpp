// 0125_07PtrFuncExam.cpp : This file contains the 'main' function. Program execution begins and ends there.
//

#include <iostream>

using namespace std;

double Add(double, double);
double Sub(double, double);
double Mul(double, double);
double Div(double, double);
double Calculator(double, double, double(*func)(double, double));

//int Add(int, int);
//int Sub(int, int);
//int Mul(int, int);
//int Div(int, int);
//int Calculator(int, int, int(*func)(int, int));
//
//float Add(float, float);
//float Sub(float, float);
//float Mul(float, float);
//float Div(float, float);
//float Calculator(float, float, float(*func)(float, float));

int main()
{
    double (*calc)(double, double) = nullptr; // Define function pointer
    //int (*calc)(int, int) = nullptr;
    //float (*calc)(float, float) = nullptr;
    double dNum1 = 3., dNum2 = 4., result = 0.;
    int start = 1;
    char oper = '+';

    while (start)
    {
        cout << "Enter 2 Numbers : ";
        cin >> dNum1; cout << " "; cin >> dNum2;
        cout << "select cal mode (+, -, *, /)" << endl;
        cin >> oper;

        switch (oper)
        {
        case '+':
            calc = Add;
            break;
        case '-':
            calc = Sub;
            break;
        case '*':
            calc = Mul;
            break;
        case '/':
            calc = Div;
            break;
        default:
            cout << "Only Support(+, -, *, /)" << endl;
        }

        result = Calculator(dNum1, dNum2, calc);
        cout << "The result is : " << result << endl;
        //std::cout << "Hello World!\n";
        cout << "enter 0 to exit ";
        cin >> start;
        
    }
    

    return 0;
}

double Add(double dNum1, double dNum2)
{
    return dNum1 + dNum2;
}double Sub(double dNum1, double dNum2)
{
    return dNum1 - dNum2;
}double Mul(double dNum1, double dNum2)
{
    return dNum1 * dNum2;
}double Div(double dNum1, double dNum2)
{
    return dNum1 / dNum2;
}
double Calculator(double dNum1, double dNum2, double(*func)(double, double))
{
    return func(dNum1, dNum2);
}
//
//int Add(int dNum1, int dNum2)
//{
//    return dNum1 + dNum2;
//}int Sub(int dNum1, int dNum2)
//{
//    return dNum1 - dNum2;
//}int Mul(int dNum1, int dNum2)
//{
//    return dNum1 * dNum2;
//}int Div(int dNum1, int dNum2)
//{
//    return dNum1 / dNum2;
//}
//int Calculator(int dNum1, int dNum2, int(*func)(int, int))
//{
//    return func(dNum1, dNum2);
//}
//
//float Add(float dNum1, float dNum2)
//{
//    return dNum1 + dNum2;
//}float Sub(float dNum1, float dNum2)
//{
//    return dNum1 - dNum2;
//}float Mul(float dNum1, float dNum2)
//{
//    return dNum1 * dNum2;
//}float Div(float dNum1, float dNum2)
//{
//    return dNum1 / dNum2;
//}
//float Calculator(float dNum1, float dNum2, float(*func)(float, float))
//{
//    return func(dNum1, dNum2);
//}


// Run program: Ctrl + F5 or Debug > Start Without Debugging menu
// Debug program: F5 or Debug > Start Debugging menu

// Tips for Getting Started: 
//   1. Use the Solution Explorer window to add/manage files
//   2. Use the Team Explorer window to connect to source control
//   3. Use the Output window to see build output and other messages
//   4. Use the Error List window to view errors
//   5. Go to Project > Add New Item to create new code files, or Project > Add Existing Item to add existing code files to the project
//   6. In the future, to open this project again, go to File > Open > Project and select the .sln file
