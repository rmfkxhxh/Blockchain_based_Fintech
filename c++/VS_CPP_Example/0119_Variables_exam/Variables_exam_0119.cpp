// Variables_exam_0119.cpp : This file contains the 'main' function. Program execution begins and ends there.
//

#include <iostream>
#include <stdio.h>
#include <string>

#include "Variables_exam.hpp"

using namespace std;

//int main(int argc, char** argv)
//{
//    const int nNumber = 10;
//
//    cout << nNumber << endl;
//
//    const int iMinutesPerHour = 60;
//    const float PI = 3.141592;
//    cout << "iMinutesPerHour : " << iMinutesPerHour << NEW_LINE;
//    cout << "PI : " << PI << endl;
//    printf("iMinutesPerHour[%d], PI[%f], %f\n", iMinutesPerHour, PI, PI);
//    //%d decimal %f float
//
//    cout << "Define const WIDTH : " << WIDTH << NEW_LINE << "Define const HEIGHT : " << HEIGHT << NEW_LINE;
//
//    int mode;
//    cout << "모드를 선택해주세여 : " << endl;
//    cin >> mode;
//
//    if (mode > 0)
//    {
//        for (int i = 0; i < argc; i++)
//        {
//            cout << "argv[" << i << "]" << "=" << argv[i] << endl;
//        }
//    }
//
//    return 0;
//
//}

int main()
{
	int nNumber = 6;
	float fNum = 6.123456781111111;
	double dNum = 6.123456789101112131415161718192021;
	char cLetter = 'A';
	bool isTrue = true, isFalse = false;
	string strTxt = "Hello\vWorld!~@~!@!\a";
	int isNumber = true;

	//linux 줄바꿈 \r\n
	// \r 캐리지 리턴
	// \t tab
	// \v vertical tab ??
	//\a beep pc 스피커 소리 용

	cout << "int : " << nNumber << endl;
	cout.precision(7);
	cout << "float : " << fixed << fNum << endl;
	cout.precision(15);
	cout << "double : " << fixed << dNum << endl;
	cout << "char : " << cLetter << endl;
	cout << "bool True: " << isTrue << " bool False : " << isFalse << " is Number : " << isNumber << endl;
	cout << "string : " << strTxt << endl;
	cout << "---------------------" << endl;
	printf("cLetter number 값은? %d\r\n", cLetter);
	printf("float : %f double : %f\n", fNum, dNum);

	float f1 = 35e4;
	double d1 = 24E3;
	cout.precision(0);
	cout << "f1 : " << fixed << f1 << " d1 : " << fixed << d1 << endl;

	char chA = 'A';
	char chAA = 0x41; 
	char chBB = 0x42;
	char chCC = 0x43;

	cout << "chA : " << (int)chA << endl;
	// 형변환
	cout << chAA << chBB << chCC << endl;

	string strGreetings = "Hello C++!!!";
	cout << strGreetings << endl;

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
