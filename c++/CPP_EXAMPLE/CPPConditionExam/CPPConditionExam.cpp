// CPPConditionExam.cpp : This file contains the 'main' function. Program execution begins and ends there.
//

#include <iostream>
#include <time.h>

using namespace std;

int GetCurrentTime(void)
{
    //mac용
    time_t curTime = time(NULL);
    struct tm* pLocalTime = NULL;

    //windows
    // time_t curTime = time(NULL);
    // struct tm pLocalTime;

    pLocalTime = localtime(&curTime); //mac용
    // localtime_s(&pLocalTime, &curTime); //windows용
    
    if (&pLocalTime == NULL)
    {
        //time get failure then return 0
        return -1;
    }

    return pLocalTime->tm_hour; //mac
    // return pLocalTime.tm_hour; //윈도우
}

int GetCurrentDay(void)
{
    //mac용
    time_t curTime = time(NULL);
    struct tm* pLocalTime = NULL;

    //windows
    // time_t curTime = time(NULL);
    // struct tm pLocalTime;

    pLocalTime = localtime(&curTime); //mac용
    // localtime_s(&pLocalTime, &curTime); //windows용

    if (&pLocalTime == NULL)
    {
        //time get failure then return -1
        return -1;
    }
    return pLocalTime->tm_wday; //mac
    // return pLocalTime.tm_wday; //윈도우
}

int main()
{
    int time = -1;
    int wDay = -2;
    time = GetCurrentTime();
    wDay = GetCurrentDay();
    if (time < 0)
        return 128;
    cout << time << endl;
    if(time < 10) 
    {
        cout << "Good Moring K-digital class 4";
    }
    else if (time < 20)
    {
        cout << "Good Day K-digital class 4";
    }
    else
    {
        cout << "Good Evening K-digital class 4";
    }
    cout << "\r\n";
    
    if (wDay < 0)
        return 129;

    switch (wDay)
    {
        case 1:
            cout << "Monday";
            break;
        case 2:
            cout << "Tuesday";
            break;
        case 3:
            cout << "Wednesday";
            break;
        case 4:
            cout << "Thursday";
            break;
        case 5:
            cout << "Friday";
            break;
        case 6:
            cout << "Saturday";
            break;
        case 7:
            cout << "Sunday";
            break;
        default:
            cout << "no day" << wDay;
            break;
    }
    cout << endl;
    
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
