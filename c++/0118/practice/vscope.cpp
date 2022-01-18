#include <iostream>

using namespace std;

int gVar= 100; 

int main() 
{
    int a, b, c;
    int gVar;

    a = 10;
    b = 40;
    c = a + b;
    // gVar = a + b;

    cout << "c = a + b : " << c << endl;
    cout << "gVar : " << gVar << endl;

    return 0;
}