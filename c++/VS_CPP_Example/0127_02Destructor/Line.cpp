#include "Line.h"

CLine::CLine(void)
{
    cout << "Object is being created" << endl;
    ptrLinename = new char[16];
}
CLine::~CLine(void)
{
    cout << "Object is being deleted" << endl;
    if (ptrLinename != NULL)
    {
        delete ptrLinename;
    }
}
void CLine::setLength(double len)
{
    length = len;
}
double CLine::getLength(void)
{
    return length;
}