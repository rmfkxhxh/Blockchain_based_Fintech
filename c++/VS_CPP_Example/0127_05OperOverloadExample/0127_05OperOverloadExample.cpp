// 0127_05OperOverloadExample.cpp : This file contains the 'main' function. Program execution begins and ends there.
//

#include "Box.h"

int main()
{
    CBox box1;
    CBox box2;
    CBox box3;
    double volume = 0.0f;
    
    box1.SetLength(6.5);
    box1.SetBreadth(7.1);
    box1.SetHeight(5.2);
    
    box2.SetLength(12.5);
    box2.SetBreadth(13.0);
    box2.SetHeight(10.24);    

    volume = box1.GetVolume();
    cout << "Volume of Box1 : " << volume << endl;
        
    volume = box2.GetVolume();
    cout << "Volume of Box2 : " << volume << endl;

    box3 = box1 * box2;
    volume = box3.GetVolume();
    cout << "Volume of Box3 : " << volume << endl;

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
