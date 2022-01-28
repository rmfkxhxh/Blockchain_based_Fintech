#include "Shape.h"
CShape::CShape()
{
	m_width = 0;
	m_height = 0;
}

CShape::CShape(int nWidth, int nHeight)
{
	m_width = nWidth;
	m_height = nHeight;
}

//int CShape::Area()
//{
//	cout << "Parent class Area : " << m_width * m_height << endl;
//	return 0;
//}