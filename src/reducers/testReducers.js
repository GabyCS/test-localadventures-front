const testReducer = (state = {
    name: 'gabriela',
}, action) => {
    switch(action.type){
        case "SET_NAME":
            return {
                ...state,
                name: action.data
            }
        default:
            break;
    }
    return state;
}

export default testReducer;