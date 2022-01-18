#include <iostream>
// input output stream
#include <stdio.h>
// standard input output .header

using namespace std;

int main(int argc, char* argv[]) 
{
    int num, mode;
    num = 15;
    cout << num << "\n" << endl;

    cout << "모드를 선택해주세여 : " << endl;
    cin >> mode;

    if(mode > 0)
    // if(argc > 1) 
    {
        cout << "argc = " << argc << endl;
        for (int i = 0; i < argc; i++) 
        {
            cout << "argv[" << i << "]" << "=" << argv[i] << endl;
        }
    }
    
    double fNum = 99.9999;
    char cLetter = 'Z';
    string strTxt = "Hello C++ !!!";

    cout << "fNum = " << fNum << ", cLetter = " << cLetter << ", strTxt = " << strTxt << endl;
    printf("floatNum[%f], charLetter[%c]\n", fNum, cLetter);

    int x = 15, y = 21, z = 60;
    
    cout << "x = " << x << ", y = " << y << ", z = " << z << endl;
    cout << "sum = " << x + y + z << endl;

    return 0;
}