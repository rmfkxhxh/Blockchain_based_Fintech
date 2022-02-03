// 0203_04simpleCopyExam.cpp : This file contains the 'main' function. Program execution begins and ends there.
//

#include <iostream>
#include <fstream>

using namespace std;



int main()
{
    // 미리 파일 크기 확인 후 한번에 읽어서 복사
    ifstream inputFile;
    inputFile.open("image.jpg", ios::in | ios::binary);

    // total file size 
    inputFile.seekg(0, ios::end);
    long fileLength = inputFile.tellg();
    cout << "Read file size : " << fileLength << " Byte." << endl;

    // loading total file size in memory
    inputFile.seekg(0, ios::beg);
    char* buf = new char[fileLength];

    // buf에 fileLength 만큼 read
    inputFile.read(buf, fileLength);
    inputFile.close();
    
    // buffer to file
    ofstream outputFile;
    outputFile.open("copied_image.jpg", ios::out | ios::binary);
    // buf를 fileLength만큼 write
    outputFile.write(buf, fileLength);
    outputFile.close();
    
    //std::cout << "Hello World!\n";
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
