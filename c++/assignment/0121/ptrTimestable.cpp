#include <iostream>

using namespace std;

void HorTimestable(int *num)
{
    int *x = num; // start는 주소
    for (int i = 1; i < 10; i++)
    {
        cout << *x << " * " << i << " = " << *x * i << " ";
    }
    cout << "\n" << endl;
}

void VerTimestable(int *num) //얘는 왜 cosnt?
{
    int *x = num; // start는 주소
    for (int i = 1; i < 10; i++)
    {
        cout << *x << " * " << i << " = " << *x * i << endl;
    }
    cout << endl;
}

int main()
{
    int num;
    int mode;
    do
    {

        cout << "mode를 선택하세요 (1: 세로, 2:가로, 0: exit)" << endl;
        cin >> mode;

        if (mode == 0)
        {
            cout << "exiting" << endl;
        }

        else if (mode == 1)
        {
            cout << "구구단 숫자를 정해주세여" << endl;
            cin >> num;
            VerTimestable(&num);
        }
        else if (mode == 2)
        {
            cout << "구구단 숫자를 정해주세여" << endl;
            cin >> num;
            HorTimestable(&num);
        }
        else
        {
            cout << "mode를 다시 선택해주세여" << endl;
        }
    } while (mode != 0);

    return 0;
}