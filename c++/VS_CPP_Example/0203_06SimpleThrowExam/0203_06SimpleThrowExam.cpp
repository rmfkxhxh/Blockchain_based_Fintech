// 0203_06SimpleThrowExam.cpp : This file contains the 'main' function. Program execution begins and ends there.
//

#include <iostream>

using namespace std;

double division(int a, int b)
{
	if (b == 0)
	{
		throw "Division by Zero!!!";
	}
	return (double)(a / b);
}
int main()
{
	int x = 50;
	int y = 0;
	double z = 0.0f;

	try
	{
		z = division(x, y);
		cout << "divided value : " << z << endl;
		//throw 128;
	}
	//catch (int errCode)
	catch (const char* errMsg)
	{
		//cout << "An exception occured. Exception Error code : " << errCode;
		cerr << errMsg << endl;
	}
    //std::cout << "Hello World!\n";

	//try
	//`{
	//	z = division(x,y);
	//}
	//catch (const std::exception& e)
	//{
	//	cout << e.what() << endl;
	//}

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
