#include "Singleton.h"
#include <iostream>

using namespace std;

CSingleton* CSingleton::m_pInst = nullptr;

CSingleton::CSingleton()
{
	count = 0;
}

CSingleton::~CSingleton()
{

}

CSingleton* CSingleton::getInstance()
{
	if (!m_pInst)
	{
		m_pInst = new CSingleton();
	}
	return m_pInst;
}

void CSingleton::DestroyInst()
{
	if (!m_pInst)
	{
		return;
	}
	
	delete m_pInst;
	m_pInst = nullptr;
}

void CSingleton::HelloWorld()
{
	count++;
	cout << "Hello World! " << "count(" << count << ")" << endl;
}