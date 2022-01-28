#include "Triangle.h"

int CTriangle::Area()
{
	cout << "Triangle Class Area : " << m_width * m_height << endl;
	return m_width * m_height / 2;
}