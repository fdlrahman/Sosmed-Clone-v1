const globalState = {
    user: null
}

const Reducer = (state = globalState, action) => {
    if( action.type == 'SET_USER' ) {
        return {
            ...state,
            user: action.value
        }
    }

    return state;
}

export default Reducer;