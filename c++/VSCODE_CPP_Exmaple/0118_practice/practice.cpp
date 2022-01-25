#include <iostream>

using namespace std;

int main(int argc, char* argv[]) 
{
    int num = 15;
    cout << num << "\n";

    int mode;
    cout << "모드를 선택해주세여 : " << endl;
    cin >> mode;

    if(mode > 0) 
    {
        for (int i = 0; i < argc; i++) 
        {
            cout << "argv[" << i << "]" << "=" << argv[i] << endl;
        }
    }
    
    return 0;
    
}