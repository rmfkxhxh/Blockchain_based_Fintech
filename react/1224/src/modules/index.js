// todo, counter를 한개의 reducer로 합치기 위해
import { combineReducers } from "redux";
import counter from "./counter";
import todos from "./todos";

const rootReducer = combineReducers({
    counter,
    todos
})

export default rootReducer;