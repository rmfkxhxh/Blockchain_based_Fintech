import { combineReducers } from 'redux';
import board from './boardReducer.js';
import name from './nameReducer.js';

// const initialState = {
//     board: {
//         list: [
//             {
//                 idx: 0,
//                 subject: 'asd'
//             }
//         ]
//     },
//     name: '네임',
// }

const rootReducer = combineReducers({
    board,
    name,
})
// const rootReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case ('change_name'): {
//             return
//         }
//         case ('change_subject'): {
//             return
//         }
//         default:
//             return state
//     }
// }
export default rootReducer