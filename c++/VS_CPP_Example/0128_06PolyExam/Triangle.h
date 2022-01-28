#pragma once
#include "Shape.h"
class CTriangle :
    public CShape
{
public:
    CTriangle(int nWidth, int nHeight) :CShape(nWidth, nHeight) {};
    int Area();
};

