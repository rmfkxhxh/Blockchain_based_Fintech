const CHANGE_NAME = 'change_name';
const initialState = {
    name: 'ingoo'
}

const nameReducer = (state = initialState, action) => {
    switch (action.type) {
        case (CHANGE_NAME): {
            return {
                ...state,
                name: action.payload
            }
        }
        default:
            return state
    }
}

export default nameReducer