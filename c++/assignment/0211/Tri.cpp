#include "Tri.h"

Tri::Tri()
{
  for ( X = 0; X < 3; X++)
  {
    for (Y = 0; Y < 2; Y++)
    {
      cout << "Input number for TRIANGLE_AXIS[" << X << "][" << Y << "]=  ";
      cin >> xyArr[X][Y]; cout << endl;
    }
  }
};
void Tri::move(double dx, double dy)
{
  cout << "x added by : " << dx << ", y added by : " << dy << endl;
  for ( X = 0; X < 3; X++)
  {
    for (Y = 0; Y < 2; Y++)
    {
      if (Y == 0)
      {
        xyArr[X][Y] += dx;
      }
      else
      {
        xyArr[X][Y] += dy;            
      }
    }
  }
};
void Tri::scale(double sx, double sy)
{
  cout << "x mul by : " << sx << ", y mul by : " << sy << endl;
  for ( X = 0; X < 3; X++)
  {
    for (Y = 0; Y < 2; Y++)
    {
      if (Y == 0)
      {
        xyArr[X][Y] *= sx;
      }
      else
      {
        xyArr[X][Y] *= sy;            
      }
    }
  }
};

double Tri::surface()
{
  double sur = abs(
    (xyArr[0][0]*xyArr[1][1]-xyArr[0][1]*xyArr[1][0]) //x[0]*y[1]-y[0]*x[1]
    + (xyArr[1][0]*xyArr[2][1]-xyArr[1][1]*xyArr[2][0]) //x[1]*y[2]-y[1]*x[2]
    + (xyArr[2][0]*xyArr[0][0]-xyArr[2][1]*xyArr[0][0]) //x[2]*y[0]-y[2]*x[0]
  ) / 2; 
  return sur;
};

void Tri::printAll()
{
  int i,j;
  cout<<"The Triangle Cordinate is :\n";
  for(i = 0; i < 3; i++)
  {
    cout << "( ";
    for (j = 0; j < 2; j++)
      {
      cout << xyArr[i][j] << ", ";
      }
    cout << " )" << endl;
  } 
};
