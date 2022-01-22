#include <stdio.h>
#include <iostream>
#include <string>
#include <Windows.h>

using namespace std;

int main()
{
    string a[100];

    printf("문자열을 입력후 엔터를 누르세요!\n");
    cin >> a;

    SetConsoleOutputCP(CP_UTF8);
    cout << a << endl;
    // for (int i =0; i < (int)a.size(); i += 3)
    // {
    //     korean.push_back(a.substr(i,3));
    // }
    // for (const string &ko : korean)
    // {
    //     cout << ko << endl;
    // }
    
    
    return 0;
}