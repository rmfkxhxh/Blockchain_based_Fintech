import React from "react";
import styled from "styled-components";
import TodoItems from "./TodoItems";

const TodoListBlock = styled.div`
    flex: 1;
    padding: 20px 32px;
    overflow-y: auto;
`;

function TodoList() {
    return (
        <TodoListBlock>
            <TodoItems text="Create Project" done={true}></TodoItems>
            <TodoItems text="Component Styling" done={true}></TodoItems>
            <TodoItems text="Make Context" done={false}></TodoItems>
            <TodoItems text="Developing Function" done={false}></TodoItems>
        </TodoListBlock>
    )
}
export default TodoList;