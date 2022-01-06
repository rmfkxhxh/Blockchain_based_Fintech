import React from "react";
import styled from "styled-components";
import TodoItems from "./TodoItems";
// import Todos from "../ReduceExam";
import { useTodoState } from "../TodoContext";


const TodoListBlock = styled.div`
    flex: 1;
    padding: 20px 32px;
    padding-bottom: 48px;
    overflow-y: auto;
`;

function TodoList() {
    const todos = useTodoState();
    // console.log('head todos: ', todos)
    return (
        <TodoListBlock>
            {
                todos.map(todo =>
                    <TodoItems
                        key={todo.id}
                        id={todo.id}
                        text={todo.text}
                        done={todo.done}
                    />
                )
            }
            {/* <TodoItems text="Create Project" done={true}></TodoItems>
            <TodoItems text="Component Styling" done={true}></TodoItems>
            <TodoItems text="Make Context" done={false}></TodoItems>
            <TodoItems text="Developing Function" done={false}></TodoItems> */}
            {/* <Todos/> */}
        </TodoListBlock>
    )
}
export default TodoList;