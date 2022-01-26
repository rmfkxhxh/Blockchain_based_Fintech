#pragma once
#include <iostream>
#include <string>
#include <cstring>

using namespace std;

namespace FruitsNameSpace
{

#pragma pack(push, 1)
    struct Fruits
    {
        char name[50];
        int stock;
        int price;
    };
#pragma pack(pop)

    class CFruits
    {
    public:
        string name;
        int stock;
        int price;

        void PrintClassFruitInfo();
    };

    CFruits SetClassFruitInfo(string name, int stock, int price)
    {
        CFruits tempName;
        tempName.name = name;
        tempName.stock = stock;
        tempName.price = price;
        return tempName;
    }
    CFruits SetClassFruitInfoPtr(CFruits* tempName, string c_name, int stock, int price)
    {
        tempName->name = c_name;
        tempName->stock = stock;
        tempName->price = price;
        return *tempName;
    }

    void CFruits::PrintClassFruitInfo()
    {
        cout << "Infomation of " << name << " from class : " << endl;
        cout << "Fruit stock : " << stock << "개" << endl;
        cout << "Fruit price : " << price << "원\n" << endl;
        return;
    };

    Fruits SetFruitInfo(char* name, int stock, int price)
    {
        Fruits fruit;
        strcpy_s(fruit.name, _countof(fruit.name), name);
        fruit.stock = stock;
        fruit.price = price;
        cout << "Struct " << name << " complete." << endl;
        return fruit;
    };

    Fruits SetFruitInfoPtr(Fruits* fruit, char* name, int stock, int price)
    {
        strcpy_s(fruit->name, _countof(fruit->name), name);
        fruit->stock = stock;
        fruit->price = price;
        cout << "Struct from Ptr" << name << " complete." << endl;
        return *fruit;
    };

    void PrintFruitInfo(Fruits fruit)
    {
        cout << "Infomation of " << fruit.name << " : " << endl;
        cout << "Fruit stock : " << fruit.stock << "개" << endl;
        cout << "Fruit price : " << fruit.price << "원\n" << endl;
        return;
    };

    void PrintFruitInfoPtr(Fruits* fruit)
    {
        cout << "Infomation of " << fruit->name << " from Ptr: " << endl;
        cout << "Fruit stock : " << fruit->stock << "개" << endl;
        cout << "Fruit price : " << fruit->price << "원\n"
            << endl;
        return;
    };
}
