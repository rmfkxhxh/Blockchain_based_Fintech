#include <iostream>
#include <conio.h>
#include <string>
#include <windows.h>
#include <sstream>
#pragma comment(lib, "User32.lib")

using namespace std;

bool checkNumber(string x)
{
    int num = 0;

    for (int i = 0; i < x.size(); i++)
    {
        if (isdigit(x[i]) == false)
        {
            clog << "Input invalid. Please try again." << endl;
            return false;
        }
    }
    return true;
}

int main()
{
    string inNum = "NULL";
    int num = 0;
    char ch;
    // short GetKeyState(int key);
    bool downKey = GetKeyState(VK_DOWN) && 0x8000 ? true : false;
    // short GetAsyncKeyState(int key);
    // bool downKey = GetAsyncKeyState(VK_DOWN) && 0x8000 ? true : false;

    while (!downKey)
    {
        if (downKey)
        {
            clog << "\nexiting!\n"
                << endl;

            return 0;
        }
        cout << "Input number for timetable : ";
        cin >> inNum;
        if (checkNumber(inNum))
        {
            stringstream ss;
            ss << inNum;
            ss >> num;
            clog << "Your input is " << num << endl;
            cout << "한글 테스트" << endl;
            for (int i = 1; i < 10; i++)
            {
                cout << num << " * " << i << " = " << i * num << "\n";
            }

            cout << "\npress 'down key' to exit" << endl;
            cout << "press any key but 'down key' to continue\n"
                << endl;
            ch = _getch();
            downKey = GetKeyState(VK_DOWN) && 0x8000 ? true : false;
            // downKey = GetAsyncKeyState(VK_DOWN) && 0x8000 ? true : false;

        }
        else
        {
            main();
        }
    }
    return 0;
}