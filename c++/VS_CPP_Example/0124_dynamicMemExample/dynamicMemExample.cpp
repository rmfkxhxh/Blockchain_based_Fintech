// dynamicMemExample.cpp : This file contains the 'main' function. Program execution begins and ends there.
//

#include <iostream>
#include <stdlib.h>

using namespace std;

int main()
{
    int i, totalLen;
    int arrLen = 3, addLen = 2;
    int* ptrArr;

    ptrArr = (int*)malloc(arrLen * sizeof(int)); //dynamic alloccation memory
    ptrArr = (int*)calloc(arrLen, sizeof(int)); //dynamic alloccation memory

    if (ptrArr == NULL) // dynamic allocation fail
    {
        cout << "Dynamic memory allocation failed......" << endl;
        exit(1);
    }

    cout << "Dynamic allocation memory initial value : \n";

    for (int i = 0; i < arrLen; i++)
    {
        cout << ptrArr[i] << endl;
    }

    totalLen = arrLen + addLen;
    ptrArr = (int*)realloc(ptrArr, (totalLen * sizeof(int)));

    if (ptrArr == NULL) // dynamic allocation fail
    {
        cout << "Dynamic memory allocation failed......" << endl;
        exit(2);
    }

    cout << "Dynamic reallocation memory initial value : \n";

    for (int i = 0; i < totalLen; i++)
    {
        cout << ptrArr[i] << endl;
    }

    free(ptrArr);

    //const char* pStr = "This is charcter string pointer";
    //char* pStrDest = (char*)calloc(strlen(pStr) + 1, sizeof(char));

    //cout << "pStrDest Length : " << strlen((const char*)pStrDest) << endl;
    ////strncpy_s(pStrDest, pStr, strlen(pStr) + 1); //mac
    //strncpy_s(pStrDest, strlen((const char*)pStr) + 1, pStr, strlen((const char*)pStr) + 1); //windows
    //cout << "pStrDest Length : " << strlen(pStrDest) << endl;
    //cout << "pStrDest : " << pStrDest << endl;

    //free(pStrDest);

    //char cAlphabet, * pAlphabet, * ptr;
    //pAlphabet = (char*)calloc(35, sizeof(char));

    //if (pAlphabet == NULL)
    //{
    //    cout << "Dynamic memory allocation failed..." << endl;
    //    exit(1);
    //}

    //ptr = pAlphabet;

    //for (cAlphabet = 0x41; cAlphabet < 0x58; cAlphabet++)
    //{
    //    *ptr++ = cAlphabet;
    //}

    //*ptr = '\0';

    //cout << "Alphabet string : " << pAlphabet << endl;

    //free(pAlphabet);

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