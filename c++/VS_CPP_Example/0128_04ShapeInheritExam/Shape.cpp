#include "Shape.h"

CShape::CShape()
{
	m_height = 0;
	m_width = 0;
}

void CShape::SetWidth(int nWidth)
{
	m_width = nWidth;
}

void CShape::SetHeight(int nHeight)
{
	m_height = nHeight;
}
