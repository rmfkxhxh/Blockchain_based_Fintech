// 0128_06PolyExam.cpp : This file contains the 'main' function. Program execution begins and ends there.
//

#include "Rectangle.h"
#include "Triangle.h"

int main()
{
    CShape* shape;
    CRectangle rect(20, 35);
    CTriangle tri(10, 35);

    // store the address of rectangle
    shape = &rect;

    // call rectangle area
    shape->Area();

    // store the address of triangle
    shape = &tri;

    //call triangle area
    shape->Area();

    //std::cout << "Hello World!\n";
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
