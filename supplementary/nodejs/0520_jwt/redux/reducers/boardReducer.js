//redux-actions
// import { createAction } from 'redux-actions';

// redux toolkit
/* 
    redux
    redux-actions
    immer
    redux-slice
    handleActions
    ...
*/

/*
const CHANGE_SUBJECT = 'change_subject';

const change_subject = () => ({
    type:CHANGE_SUBJECT, payload
})

dispatch(change_name())

const changeName = createAction('change_subject')
dispatch(changeName)
changeName.toString() // 'change_subject'
*/

const CHANGE_SUBJECT = 'change_subject';
const initialState = {
    list: [
        {
            idx: 0,
            subject: 'asd'
        }
    ]
}

const boardReducer = (state = initialState, action) => {
    switch (action.type) {
        case (CHANGE_SUBJECT): {
            const newList = [...state.list]
            newList[0].subject = action.payload
            return {
                ...state,
                list:newList
            }
        }
        default:
            return state
    }
}

export default boardReducer

/*
    redux 
    react-redux
        provider
        useSelector == store.getState()
        useDispatch == store.dispatch()
*/