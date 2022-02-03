#include <iostream>
#include <string>
#include <exception>
#include <fstream>
//#include <experimental/filesystem>
#include <filesystem>
#include <windows.h>   // GetCurrentDirectory 함수를 사용하이 위하여!




using namespace std;
namespace fs = std::filesystem;

class DefException : public exception
{
    virtual const char* what() const throw()
    {
        return "Defining new class DefException";
    }
};

int main()
{
    fs::path path1 = "target";
    if (!fs::exists(path1))
    {
        string directory_name("target");

        fs::create_directory(path1) ? cout << "created directory - " << path1 << endl : cout << "create_directory() failed" << endl;
    }
    char path[128];
    // 프로그램의 현재 작업 경로를 얻는다.
    if (GetCurrentDirectoryA(128, path) > 0) {
        // 작업 경로를 얻었다면 화면에 출력한다.
        cout << "Working Directory : " << path << endl;
    }
    try
    {

        // 미리 파일 크기 확인 후 한번에 읽어서 복사
        ifstream inputFile;
        //inputFile.open(path2, ios::in | ios::binary);
        //fs::path path2 = "../src/image.jpg";
        inputFile.open("src/image.jpg", ios::in | ios::binary);

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
        //fs::path path3 = "..\target\copied_image.jpg";
        //outputFile.open(path3, ios::out | ios::binary);
        outputFile.open("target/copied_image.jpg", ios::out | ios::binary);

        // buf를 fileLength만큼 write
        outputFile.write(buf, fileLength);
        outputFile.close();
    }
    catch (const std::exception& e)
    {
        std::cerr << e.what() << '\n';
        return -1;
    }


    return 0;
}
