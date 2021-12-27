import React, { Reducer, useReducer } from "react";

const intialTodos = [
    {
        id: 1,
        text: 'Create Project',
        done: true
    },
    {
        id: 2,
        text: 'Component Styling',
        done: true
    },
    {
        id: 3,
        text: 'Make Context',
        done: false
    },
    {
        id: 4,
        text: 'Developing Function',
        done: false
    }
];

const reducer = (state, action) => {
    switch (action.type) {
        case "COMPLETE":
            return state.map(todo => {
                if (todo.id === action.id) {
                    return ({ ...todo, complete: !todo.complete })
                } else {
                    return todo;
                }
            });
        default:
            return state;
    }
};

function Todos() {
    const [todos, dispatch] = useReducer(reducer, intialTodos)

    const handleComplete = todo => {
        dispatch({ type: "COMPLETE", id: todo.id });
    };

    return (
        <>
            {todos.map(todo => (
                <div key={todo.id}>
                    <label>
                        <input
                            type="checkbox"
                            checked={todo.complete}
                            onChange={() => handleComplete(todo)}
                        />
                        {todo.text}
                    </label>
                </div>
            ))}
        </>
    );
}
// imported from App
export default Todos;
