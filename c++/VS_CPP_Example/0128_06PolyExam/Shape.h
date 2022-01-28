#pragma once
#include <iostream>

using namespace std;

class CShape
{
protected:
	int m_width, m_height;
public:
	CShape();
	~CShape() {};
	CShape(int nWidth, int nHeight);
	virtual int Area() = 0;
	//int Area();
};

