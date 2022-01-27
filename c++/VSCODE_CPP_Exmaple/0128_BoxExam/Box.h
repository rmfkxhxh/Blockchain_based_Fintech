#pragma once
#include <iostream>
using namespace std;
class CBox
{
public:
	CBox() 
	{
		m_length = 0.0f;
		m_breadth = 0.0f;
		m_height = 0.0f;
	};
	~CBox() {};
	double GetVolume(void);
	void SetLength(double);
	void SetBreadth(double);
	void SetHeight(double);
	CBox operator*(const CBox&);

private:
	double m_length;
	double m_breadth;
	double m_height;
};

