#pragma once
#include <iostream>

using namespace std;

class CLine
{
public:
    void setLength(double len);
    double getLength(void);
    CLine();
    ~CLine(); //객체가 메모리에 반환될때 쓰는 함수
private:
    double length;
    char* linename;
};


