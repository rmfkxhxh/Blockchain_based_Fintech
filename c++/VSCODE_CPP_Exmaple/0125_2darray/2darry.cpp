// 0125_03TwoDArrPointers.cpp : This file contains the 'main' function. Program execution begins and ends there.
//

#include <iostream>

using namespace std;

int main()
{
    int row = 3, col = 5;
    int* row_1 = new(nothrow) int[col] {1, 2, 3, 4, 5}; //int 원소 5개 1차원 동적 배열
    int* row_2 = new(nothrow) int[col] {6, 7, 8, 9, 10}; //int 원소 5개 1차원 동적 배열
    int* row_3 = new(nothrow) int[col] {11, 12, 13, 14, 15}; //int 원소 5개 1차원 동적 배열

    int** twoD_array = new(nothrow) int* [row] {row_1, row_2, row_3};
    // int* 포인터 원소 3개 (= 1차원 배열 이름 3개)의 2차원 동적 배열 2d_array
    // 포인터 3개가 들어있는 배열(포인터)의 주소를 리턴 받음
    // 포인터의 포인터이므로 2d_array의 타입은 int **가 된다.
    if (row_1 == nullptr || row_2 == nullptr || row_3 == nullptr || twoD_array == nullptr)
    {
        cout << "Error memory could not be allocated...\n";
        exit(1);
    }
    for (int i = 0; i < row; i++)
    {
        cout << "row : " << i << endl;
        for (int j = 0; j < col; j++)
        {
            cout << "col : " << j << endl;
            cout << twoD_array[i][j] << endl;

        }
    }

    delete[] row_1;
    delete[] row_2;
    delete[] row_3;
    delete[] twoD_array;

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
