const searchRedurcer = (state = {
    showFormSearch: true,
    commits: false,
    getCommitsFetch:false,
    getCommitsSuccess:false,
    getCommitsFailure:false
}, action) => {
    switch(action.type){
        case "SET_STATE_FORM_SEARCH":
            return {
                ...state,
                showFormSearch: action.data
            }
        default:
            break;
    }
    return state;
}

export default searchRedurcer;