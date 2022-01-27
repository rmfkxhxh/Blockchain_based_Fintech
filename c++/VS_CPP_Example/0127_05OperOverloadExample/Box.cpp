#include "Box.h"

double CBox::GetVolume(void)
{
	return m_length * m_breadth * m_height;
}

void CBox::SetLength(double len)
{
	m_length = len;
}

void CBox::SetBreadth(double bre)
{
	m_breadth = bre;
}

void CBox::SetHeight(double hei)
{
	m_height = hei;
}

CBox CBox::operator*(const CBox& b)
{
	CBox box;
	box.m_length = this->m_length + b.m_length;
	box.m_breadth = this->m_breadth + b.m_breadth;
	box.m_height = this->m_height + b.m_height;

	return box;
}