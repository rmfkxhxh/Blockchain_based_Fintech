#pragma once


class CSingleton
{
private:
	CSingleton();
	~CSingleton();

private:
	static CSingleton* m_pInst;

public:
	int count;
	static CSingleton* getInstance();
	static void DestroyInst();
	void HelloWorld();

};


