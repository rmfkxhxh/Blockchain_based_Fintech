import React, { useReducer, createContext, useContext, useRef } from "react";

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

function todoReducer(state, action) {
    switch (action.type) {
        case "CREATE":
            return state.concat(action.todo);
        case "TOGGLE":
            return state.map(
                todo => todo.id === action.id ? { ...todo, done: !todo.done } : todo
            );
        case "REMOVE":
            return (state.filter(todo => todo.id !== action.id));
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    };
};

const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
const TodoNextIdContext = createContext();

export function TodoProvider({ children }) {
    //useReducer(<reducer>, <initialState>)
    const [state, dispatch] = useReducer(todoReducer, intialTodos);
    const nextId = useRef(5);

    return (
        <TodoStateContext.Provider value={state}>
            <TodoDispatchContext.Provider value={dispatch}>
                <TodoNextIdContext.Provider value={nextId}>
                    {children}
                </TodoNextIdContext.Provider>
            </TodoDispatchContext.Provider>
        </TodoStateContext.Provider>
    );
};

export function useTodoState() {
    const context = useContext(TodoStateContext);

    if (!context) {
        throw new Error('Cannot Find Todoprovider!~!~! \nNo Context');
    } else {
        return context;
    }

}

export function useTodoDispatch() {
    const context = useContext(TodoDispatchContext);

    if (!context) {
        throw new Error('Cannot Find Todoprovider!~!~! \nNo Dispatch');
    } else {
        return context;
    }
}

export function useTodoNextId() {
    const context = useContext(TodoNextIdContext);

    if (!context) {
        throw new Error('Cannot Find Todoprovider!~!~! \nNo nextId');
    } else {
        return context;
    }
}

