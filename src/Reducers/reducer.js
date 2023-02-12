const initialState = 0;
const reducer = (state = initialState , action ) => {
    switch(action.type) {
        case 'INCR':
            return state + 1;
        case 'DECR':
            return state ? state - 1 : state;
        default:
            return state;
    }
}

export default reducer;