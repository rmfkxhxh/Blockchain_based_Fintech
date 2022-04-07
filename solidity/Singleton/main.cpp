#include "Singleton.h"

int main(int arc, char** argv)
{
	CSingleton* ps1, *ps2;

	ps1 = CSingleton::getInstance();
	ps2 = CSingleton::getInstance();

	ps1->HelloWorld();
	CSingleton::getInstance()->HelloWorld();

	ps2->HelloWorld();

	ps1->DestroyInst();
	// or
	//CSingleton::DestroyInst();
	return 0;
}