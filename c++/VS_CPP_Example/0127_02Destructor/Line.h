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
private: //member
    double length; 
    char* ptrLinename;
};

//void SetLine(double, int); // 매개변수 타입만 정의가능
