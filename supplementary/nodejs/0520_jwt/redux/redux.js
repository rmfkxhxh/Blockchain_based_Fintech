// redux
import redux, { createStore } from 'redux';
import rootReducer from './reducers/index.js'

// applyMiddleware
// 2. combineReducers
// compose
// 1. createStore



// const initialState = {
//     name: '네임',
//     board: {
//         list: [
//             {
//                 idx: 0,
//                 subject: 'asd'
//             }
//         ]
//     }
// }


// const reducer = (state = initialState, action) => {
//     // if (action.type === 'change_name') {
//     //     return {
//     //         ...state, // 불변성
//     //         name: '이름2'
//     //     }
//     // }
//     // return initialState

//     switch (action.type) {
//         case "change_name":
//             return {
//                 ...state,
//                 name: action.payload
//             }
//         case "change_subject":
//             const newList = [...state.board.list]
//             newList[action.payload.index].subject = action.payload.subject
//             return {
//                 ...state,
//                 board: {
//                     ...state.board,
//                     list: [...newList]
//                 }
//             }
//         default:
//             return initialState

//     }

// }

// 상태, 상태를 바꿀수있는 함수 (유사 React.useState)
const store = createStore(rootReducer);
console.log(store.getState())
/*
    dispatch {상태 바꿀때 사용}
    getState {모두 호출}
*/
// console.log(store.getState()) //네임
// const 별풍 = { type: 'change_name', payload: '별풍' } // == action
// store.dispatch(별풍)
// console.log(store.getState()) //이름2
// console.log(store.getState().board.list)
// store.dispatch({
//     type: 'change_subject',
//     payload: {
//         index: 0, subject: 'new subject'
//     }
// })
// console.log(store.getState().board.list)


// const [state, dispatch] = useReducer(reducer, initialState)
//      잘생긴남자  못생긴남자            이쁜여자
// 못생긴남자 -> 이쁜여자 -> 잘생긴남자

