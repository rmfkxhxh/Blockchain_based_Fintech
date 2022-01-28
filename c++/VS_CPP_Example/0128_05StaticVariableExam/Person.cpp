#include "Person.h"

int CPerson::m_nPersonCount = 0; //Initialize static member variable

CPerson::CPerson(const string& strName, int nAge)
{
	m_strName = strName;
	m_nAge = nAge;
	cout << "No." << ++m_nPersonCount << " Person Created" << endl;
}

CPerson::~CPerson()
{
	--m_nPersonCount;
	cout << "Currently created number of people : " << m_nPersonCount << endl;
}

void CPerson::ShowPersonInfomation()
{
	cout << "This person's name is " << m_strName << ", and is " << m_nAge << " years old." << endl;
}

int CPerson::PersonCount() //static member function
{
	return m_nPersonCount;
}

