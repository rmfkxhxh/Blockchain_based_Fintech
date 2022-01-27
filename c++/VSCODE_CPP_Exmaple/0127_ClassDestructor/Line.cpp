#include "Line.h"

CLine::CLine(void)
{
    cout << "Object is being created" << endl;
    linename = new char[16];
}
CLine::~CLine(void)
{
    cout << "Object is being deleted" << endl;
    if (linename != NULL)
    {
        delete linename;
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