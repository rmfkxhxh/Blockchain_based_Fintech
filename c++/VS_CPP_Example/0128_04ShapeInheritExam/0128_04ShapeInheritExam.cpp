// 0128_04ShapeInheritExam.cpp : This file contains the 'main' function. Program execution begins and ends there.
//

#include "Triangle.h"
#include "Rectangle.h"

int main()
{
    CRectangle* rec = new CRectangle();
    CTriangle* tri = new CTriangle();

    rec->SetWidth(30);
    rec->SetHeight(50);
    cout << "Rectangle area : " << rec->GetArea() << endl;

    tri->SetWidth(30);
    tri->SetHeight(50);
    cout << "Triangle area : " << tri->GetArea() << endl;

    CRectangle rect1 = (*rec) * 2;
    CRectangle rect2 = (*rec) * 4;
    cout << "rect1 area : " << rect1.GetArea() << endl;
    cout << "rect2 area : " << rect2.GetArea() << endl;

    if (rec != NULL) delete rec;
    if (tri != NULL) delete tri;

    return 0;
}

// Run program: Ctrl + F5 or Debug > Start Without Debugging menu
// Debug program: F5 or Debug > Start Debugging menu

// Tips for Getting Started: 
//   1. Use the Solution Explorer window to add/manage files
//   2. Use the Team Explorer window to connect to source control
//   3. Use the Output window to see build output and other messages
//   4. Use the Error List window to view errors
//   5. Go to Project > Add New Item to create new code files, or Project > Add Existing Item to add existing code files to the project
//   6. In the future, to open this project again, go to File > Open > Project and select the .sln file
