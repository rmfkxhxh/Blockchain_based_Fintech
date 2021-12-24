import { createStore } from 'redux';

// redux에서 관리할 store 정의

const initialState = {
    counter: 0,
    text: '',
    list: []
};

// Action Type define.
// Action Type definition uppercase.

const INCREASE = 'INCREAESE';
const DECREASE = 'DECREASE';
const CHANGE_TEXT = 'CHANGE_TEXT';
const ADD_TO_LIST = 'ADD_TO_LIST';

// Create Action Function
function increase() {
    return (
        {
            type: INCREASE //Action must need type
        }
    );
};

const decrease = () => ({
    type: DECREASE
});

const changeText = (text) => ({
    type: CHANGE_TEXT,
    text
});

const addToList = (item) => ({
    type: ADD_TO_LIST,
    item
});

// make reducer function

function reducer(state = initialState, action) {
    switch (action.type) {
        case INCREASE:
            return {
                ...state,
                counter: state.counter + 1
            };
        case DECREASE:
            return {
                ...state,
                counter: state.counter - 1
            }
        case CHANGE_TEXT:
            return {
                ...state,
                text: action.text
            }
        case ADD_TO_LIST:
            return {
                ...state,
                list: state.list.concat(action.item)
            }
        default:
            return state
    }
}

// make store
const store = createStore(reducer);

console.log(store.getState()); //current store state

// store 안에 들어잇는 state가 바뀔때마다 호출되는 listener function
const listener = () => {
    const state = store.getState();
    console.log('listener: ' + state);
};

const unsubscribe = store.unsubscribe(listener); //구독해지

//action dispatch
store.dispatch(increase());
store.dispatch(decrease());
store.dispatch(changeText({ text: "WOWWOWWOW" }));
store.dispatch(addToList({ id: 1, text: "WOW" }));