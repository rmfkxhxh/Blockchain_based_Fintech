#include <iostream>

using namespace std;

int main()
{
    int num;
    int mode;

    do
    {
        cout << "mode를 선택하세요 (1: 세로, 2:가로, 0: exit)" << endl;
        cin >> mode;

        // vertical
        if (mode == 0)
        {
            cout << "exitng" << endl;
            return 0;
        }
        else if (mode == 1)
        {
            cout << "구구단 숫자를 입력하세여" << endl;
            cin >> num;
            for (int i = 1; i < 10; i++)
            {
                cout << num << " * " << i << " = " << num * i << endl;
            }
            cout << endl;
        }
        // horizontal
        else if (mode == 2)
        {
            cout << "구구단 숫자를 입력하세여" << endl;
            cin >> num;
            for (int i = 1; i < 10; i++)
            {
                cout << num << " * " << i << " = " << num * i << " ";
            }
            cout << "\n" << endl;
        }
        else
        {
            cout << "mode를 다시 선택해주세요\n" << endl;
        }
    } while ( mode != 0);

    return 0;
}