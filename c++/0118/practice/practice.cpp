#include <iostream>

using namespace std;

int main(int argc, char* argv[]) 
{
    int num = 15;
    cout << num << "\n";

    if(argc > 1) 
    {
        for (int i = 0; i < argc; i++) 
        {
            cout << "argv[" << i << "]" << "=" << argv[i] << endl;
        }
    }

    return 0;
}