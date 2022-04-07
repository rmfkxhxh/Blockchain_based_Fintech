#pragma once

#include <cmath>
#include <iostream>

using namespace std;

class Tri
{
private:
  double xyArr[3][2];
  int X, Y;
public:
  Tri();
  void move(double dx, double dy);
  void scale(double sx, double sy);
  double surface();
  void printAll();
};