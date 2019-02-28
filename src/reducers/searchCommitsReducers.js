const searchCommitsRedurcer = (state = {
    commits: false,
    getCommitsFetch:false,
    getCommitsSuccess:false,
    getCommitsFailure:false
}, action) => {
    switch(action.type){
        case "GET_COMMITS_FETCHING":
            return {
                ...state,
                commits: false,
                getCommitsFetch:true,
                getCommitsSuccess:false,
                getCommitsFailure:false
            }
        case "GET_COMMITS_SUCESS":
            return {
                commits: action.data,
                getCommitsFetch:false,
                getCommitsSuccess:true,
                getCommitsFailure:false
            }
        case "GET_COMMITS_FAILURE":
            return {
                commits:false,
                getCommitsFetch:false,
                getCommitsSuccess:false,
                getCommitsFailure:true
            }
        default:
            break;
    }
    return state;
}

export default searchCommitsRedurcer;