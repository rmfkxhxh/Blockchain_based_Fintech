#pragma once
#include "Shape.h"
class CRectangle :
    public CShape
{
public:
    CRectangle(int nWidth = 0, int nHeight = 0) :CShape(nWidth, nHeight) {};
    int Area();
};

