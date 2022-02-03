// 0203_05filePosExam.cpp : This file contains the 'main' function. Program execution begins and ends there.
//

#include <iostream>
#include <fstream>
#include <cstring>

using namespace std;

struct DATE
{
    int year;
    int month;
    int day;
};
int main()
{
    DATE arrDate[3] = 
    {
        {2021, 3, 28}, 
        {2021, 12, 25}, 
        {2021, 8, 26}
    };
    DATE date;
    DATE wDate = {1994, 8, 26};

    ofstream outFile;
    outFile.open("text.txt", ios::out | ios::binary);
    outFile.write((char*)arrDate, sizeof(DATE) * 3);

    outFile.seekp(0); //seekput
    outFile.write((char*)&wDate, sizeof(DATE)); //write할 data는 wDate
    outFile.close();

    ifstream inFile;
    memset(arrDate, 0, sizeof(DATE) * 3); //arrDate initiate to 0
    inFile.open("text.txt", ios::in | ios::binary);
    inFile.read((char*)&arrDate, sizeof(DATE) * 3);

    for (int i = 0; i < 3; i++)
    {
        cout << arrDate[i].year << "-";
        cout << arrDate[i].month << "-";
        cout << arrDate[i].day << endl;
    }
    cout << "Random file position reading file" << endl;
    inFile.seekg(sizeof(DATE) * 1, ios::beg); // moving file position
    inFile.read((char*)&date, sizeof(DATE));
    cout << date.year << "-" << date.month << "-" << date.day << endl;
    inFile.close();

    return 0;
    //std::cout << "Hello World!\n";
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
