#include "fruits.h"

using namespace FruitsNameSpace;

int main()
{
    Fruits* Mango = new Fruits;
    strcpy_s(Mango->name, _countof(Mango->name), "Mango");
    Mango->stock = 595959;
    Mango->price = 1500;
    PrintFruitInfoPtr(Mango);
    PrintFruitInfo(*Mango);
    // cout << "size: " << sizeof(*Mango) << endl;
    // cout << "size: " << sizeof(Fruits) << endl;


    Fruits Pineapple = SetFruitInfo((char*)"Pineapple", (int)5000, (int)2000);
    PrintFruitInfo(Pineapple);
    PrintFruitInfoPtr(&Pineapple);
    // cout << "size: " << sizeof(Pineapple) << endl;

    Fruits* Peach = new Fruits;
    SetFruitInfoPtr(Peach, (char*)"Peach", (int)150, (int)3500);
    PrintFruitInfoPtr(Peach);
    PrintFruitInfo(*Peach);
    // cout << "size: " << sizeof(*Peach) << endl;

    CFruits DragonEyes;
    DragonEyes.name = "DragonEyes";
    DragonEyes.stock = 65500;
    DragonEyes.price = 800;
    DragonEyes.PrintClassFruitInfo();

    CFruits Orange = SetClassFruitInfo((string)"Orange", 50000, 100);
    Orange.PrintClassFruitInfo();

    CFruits* Banana = new CFruits;
    SetClassFruitInfoPtr(Banana, (string)"Banana", 156156, 600);
    Banana->PrintClassFruitInfo();


    delete Mango;
    delete Peach;
    delete Banana;

    return 0;
}
