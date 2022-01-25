#include <iostream>

using namespace std;

double Add(double, double);
double Sub(double, double);
double Mul(double, double);
double Div(double, double);
double Calculator(double, double, double(*func)(double, double));

int main()
{
    double (*calc)(double, double) = nullptr; // Define function pointer

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
