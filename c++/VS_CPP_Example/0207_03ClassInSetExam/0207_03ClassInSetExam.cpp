// 0207_03ClassInSetExam.cpp : This file contains the 'main' function. Program execution begins and ends there.
//

#include <iostream>
#include <set>
#include <string>

using namespace std;

template <typename T, typename C>
void PrintSetElement(set<T, C>& s)
{
    for (const auto& ele : s)
    {
        cout << ele << " ";
    }
    cout << endl;
}

class Todo
{
private: 
    int priority;
    string jobDesc;
public:// 안쓰면 private
    Todo(int nPriority, string strJobDesc)
        : priority(nPriority),
        jobDesc(strJobDesc) //초기화 방법
    {
    }
//#if 0
//    bool operator<(const Todo& t) const
//    {
//        if (priority == t.priority)
//        {
//            return jobDesc < t.jobDesc;
//        }
//        return priority < t.priority;
//    }
//#endif

    friend class TodoCmp;

    friend ostream& operator<<(ostream& o, const Todo& td);
};

class TodoCmp
{
public:
    bool operator()(const Todo& t1, const Todo& t2) const
    {
        if (t1.priority == t2.priority)
        {
            return (t1.jobDesc < t2.jobDesc);
        }
        return (t1.priority > t2.priority);
    }
};
ostream& operator<<(ostream& o, const Todo& td)
{
    o << "[Priority : " << td.priority << "]" << td.jobDesc << endl;
    return o;
}
int main()
{
    set<Todo, TodoCmp> todos;

    todos.insert(Todo(1, "excercise C++"));
    todos.insert(Todo(2, "excercise math"));
    todos.insert(Todo(1, "programming project"));
    todos.insert(Todo(3, "meet friends"));
    todos.insert(Todo(2, "watch a movie"));

    PrintSetElement(todos);

    cout << "====================================" << endl;
    cout << "if you complete exercise math" << endl;
    todos.erase(todos.find(Todo(2, "excercise math")));
    //std::cout << "Hello World!\n";
    PrintSetElement(todos);

    return 0;
}

// Run program: Ctrl + F5 or Debug > Start Without Debugging menu
// Debug program: F5 or Debug > Start Debugging menu

// Tips for Getting Started: 
//   1. Use the Solution Explorer window to add/manage files
//   2. Use the Team Explorer window to connect to source control
//   3. Use the Output window to see build output and other messages
//   4. Use the Error List window to view errors
//   5. Go to Project > Add New Item to create new code files, or Project > Add Existing Item to add existing code files to the project
//   6. In the future, to open this project again, go to File > Open > Project and select the .sln file
