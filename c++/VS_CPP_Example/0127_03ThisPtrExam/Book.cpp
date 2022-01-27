#include "Book.h"

CBook::CBook()
{
	//
}

CBook::CBook(const string& strTitle, int nTotalPages)
{
	m_strTitle = strTitle;
	m_nTotalPages = nTotalPages;
	m_nCurrentPage = 0;
	SetPercent();
}

CBook::CBook(const CBook& orgBook)
{
	m_strTitle = orgBook.m_strTitle;
	m_nTotalPages = orgBook.m_nTotalPages;
	m_nCurrentPage = orgBook.m_nCurrentPage;
	m_fPercent = orgBook.m_fPercent;
}

void CBook::SetPercent()
{
	m_fPercent = (double)m_nCurrentPage / m_nTotalPages * 100;
}

const CBook& CBook::ThickerBook(const CBook& compBook)
{
	if (compBook.m_nTotalPages > this->m_nTotalPages)
	{
		return compBook;
	}
	else
	{
		return *this;
	}
}