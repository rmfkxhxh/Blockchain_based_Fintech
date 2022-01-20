// CIOExample.cpp : This file contains the 'main' function. Program execution begins and ends there.
//

#include <stdio.h>
#include <stdlib.h> //windows만 필요

int main()
{
    /*int c;
    printf("Enter a Value : ");
    c = getchar();
    printf("\nYour entered value : ");
    putchar(c);*/

    char strVar[100] = {0,};
    int iVar = 0;
    //printf("Input text : ");
    //gets_s(strVar); //윈도우만
    // //get(strVar //mac

    //printf("\nYour entered text : ");
    //puts(strVar);
    
    printf("\nYour text and number : ");
    //scanf("%s %d", strVar, &iVar); // mac
    scanf_s("%s %d", strVar, _countof(strVar), & iVar, 1); //윈도우만

    printf("\nYour entered text and number : %s. %d", strVar, iVar);

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
