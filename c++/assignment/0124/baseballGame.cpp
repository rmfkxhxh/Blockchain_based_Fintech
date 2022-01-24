#include <iostream>
#include <stdlib.h>
#include <ctime>
#include <stack>

using namespace std;
void getAnsNum(int* ansnum, int maxLen) 
{   
    int ranNum;

    srand((unsigned int)time(NULL));

    for(int i = 0; i < maxLen; i++)
    {
        ranNum = (rand() % 9) + 1;
        ansnum[i] = ranNum;
        for (int j = 0; j < i; j++)
        {
            if (ranNum == ansnum[j] && j != i)
            {
                i--;
                // cout << "repeated number at :" << i << ", value : " << ansnum[j] << endl;
            }
        }
    }
    // for (int i = 0; i < maxLen; i++)
    // {
    //     cout << "ansNum[" << i << "] = " << ansnum[i] << endl;
    // }

}

void intToArr(int* arrAdd, int inNum, int maxLen)
{
    
    for (int i = maxLen - 1; i >= 0; i--) 
    {
        arrAdd[i] = inNum % 10;
        inNum /= 10;
        // cout << "inNum" << inNum << " , arrAdd[i]" << arrAdd[i] << endl;
    }

}

int main()
{
    bool stop = false;
    int i, j; 
    int guessNum = 0, inningCount = 0;
    int* ptrGuessNum, ptrGuessNumArr;
    const int maxLen = 3;
    int ansNum[maxLen], guessNumArr[maxLen] = {0, };
    int strikeCount = 0, ballCount = 0;
    cout << "The game will stop if 3strike or after inning 9" << endl; 
    cout << "Setting 3-digit random number" << endl;
    getAnsNum(ansNum, maxLen);
    // cout << "ansNum\t" << *ansNum << endl;
    
    do
    {  
        strikeCount = 0, ballCount = 0;
        inningCount++;
        // for (i = 0; i < maxLen; i++)
        // {
        //     cout << *(ansNum + i) << endl;
        // }
        cout << "current inning : " << inningCount << " out of 9" << endl;
        cout << "guess three numbers : ";
        cin >> guessNum;
        ptrGuessNum = &guessNum;
        // cout << "ptrGuessNum\t" << *ptrGuessNum << endl;
        // cout << "guessNum\t" << guessNum << endl;

        intToArr(guessNumArr, *ptrGuessNum, maxLen);

        // for (i = 0; i < maxLen; i++)
        // {
        //     int guessDigit, ansDigit;
        //     guessDigit = guessNumArr[i];
        //     cout << "guessNumArr[" << i << "] : " << guessDigit << endl;
        // }

        for (i = 0; i < maxLen; i++)
        {
            int guessDigit, ansDigit;
            
            ansDigit = *(ansNum + i);
            // cout << i << ", ansNum[" << i << "] : " << ansDigit << endl;

            for (j = 0; j < maxLen; j++)
            {
                
                guessDigit = guessNumArr[j];
                // cout << j << " : " << guessDigit << endl;
                if (ansDigit == guessDigit && i == j)
                {
                    strikeCount++;
                }
                else if(ansDigit == guessDigit && i != j)
                {
                    ballCount++;
                }
            }
        }
        
        cout << "\ninning result : " << ballCount << "ball, " << strikeCount << " strike \n" << endl;

        if (inningCount == 9 || strikeCount == 3)
        {
            stop = true;
            if (strikeCount == 3)
            {
                cout << "Congrats~ 3번호 다 맞추셨어요~" << endl;
            }
            else if(inningCount == 9)
            {
                cout << "9이닝 동안 못맞추셧습니다..." << endl;
            }
            cout << "게임이 종료됩니다." << endl;
        }

    } 
    while (!stop);

    return 0;
}