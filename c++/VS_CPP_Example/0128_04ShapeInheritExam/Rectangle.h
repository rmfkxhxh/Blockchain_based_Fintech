#pragma once
#include "Shape.h"
class CRectangle :
    public CShape
{
public:
    CRectangle();
    CRectangle(int width, int height);
    int GetArea();
    CRectangle operator*(int) const;
    friend CRectangle operator*(int mul, const CRectangle&); //friend function
};