#pragma once

#include <string>
#include <iostream>

using namespace std;

class CPerson
{
private:
	string m_strName;
	int m_nAge;
public:

	CPerson(const string& strName, int nAge);
	~CPerson();
	static int m_nPersonCount;
	static int PersonCount();
	void ShowPersonInfomation();

};


