// 0203_07StdExceptionClassExam.cpp : This file contains the 'main' function. Program execution begins and ends there.
//

#include <iostream>
#include <exception>

using namespace std;

void ExceptHandler()
{
    cout << "Exception !!!" << endl;

    exit(-1);
}
struct MyException : public exception
{
	const char* what() const throw()
	{
		return "Defining new exception";
	}
};
class DefException : public exception
{
	virtual const char* what() const throw()
	{
		return "Defining new class DefException";
	}
};

int main()
{
 //   set_terminate(ExceptHandler);
	//try
	//{
	//	throw 1;
	//}
	//catch (char* const ex)
	//{
	//	// cannot process integer exception
	//	exit(-2);
	//}
    //std::cout << "Hello World!\n";

	try
	{
		//throw MyException();
		//throw DefException();
		int* nArr = new int[1000];
		delete nArr;
	}
	catch (exception& e)
	{
		//cout << "MyException Caught" << endl;
		//cout << "DefException Caught" << endl;
		cout << "Std Exception Caught" << endl;
		cout << e.what() << endl;
	}
	//catch (const std::exception&)
	//{
	//	//other error
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
