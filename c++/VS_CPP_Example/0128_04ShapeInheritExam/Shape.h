#pragma once

#include <iostream>

#ifndef __SHAPE_H__
#define __SHAPE_H__
class CShape
{
public:
	CShape();
	~CShape() {};
	// pure virtual function providing interface framework
	virtual int GetArea() = 0;
	void SetHeight(int nHeight);
	void SetWidth(int nWidth);
	
protected:
	int m_width;
	int m_height;

};
#endif __SHAPE_H__
using namespace std;


