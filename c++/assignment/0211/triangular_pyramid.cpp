#include <iostream>
#include <cmath>
#include "Tri.h"

using namespace std;

int main() 
{
  Tri triangle;

  triangle.printAll();
  cout << "surface : " << triangle.surface() << endl;
  triangle.move(4.2, 3.8);
  triangle.printAll();
  cout << "surface : " << triangle.surface() << endl;
  triangle.scale(4.2, 3.8);
  triangle.printAll();
  cout << "surface : " << triangle.surface() << endl;

  return 0;
} 