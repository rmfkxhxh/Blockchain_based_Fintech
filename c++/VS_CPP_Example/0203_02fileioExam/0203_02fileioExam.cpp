// 0203_02fileioExam.cpp : This file contains the 'main' function. Program execution begins and ends there.
//

#include <iostream>
#include <fstream>
#include <sstream>

using namespace std;

int main()
{
    char data[100];

    ofstream outputFile;
    outputFile.open("simplefile.dat");

    cout << "Writing to the file " << endl;
    cout << "Enter Your Name : ";
    cin.getline(data, 100);

    outputFile << data << endl;

    cout << "Enter your age : ";
    cin >> data;
    cin.ignore();

    outputFile << data << endl;
    outputFile.close();

    ifstream inputFile;
    inputFile.open("simplefile.dat");
    cout << "Reading the file simplefile.dat" << endl;
    stringstream strStream;
    //inputFile >> data;
    //cout << data << endl;
    strStream << inputFile.rdbuf();
    cout << strStream.str();

    cout << "==========================================\n";
    while (!inputFile.eof())
    {
        cout << inputFile.get();
    }

    inputFile.close();

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
