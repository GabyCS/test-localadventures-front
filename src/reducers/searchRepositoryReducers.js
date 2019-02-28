const searchRepositoryRedurcer = (state = {
    repository: false,
    getRepositoryFetch:false,
    getRepositorySuccess:false,
    getRepositoryFailure:false
}, action) => {
    switch(action.type){
        case "GET_REPOSITORY_FETCHING":
            return {
                ...state,
                repository: false,
                getRepositoryFetch:true,
                getRepositorySuccess:false,
                getRepositoryFailure:false
            }
        case "GET_REPOSITORY_SUCESS":
            return {
                showFormSearch: true,
                repository: action.data,
                getRepositoryFetch:false,
                getRepositorySuccess:true,
                getRepositoryFailure:false
            }
        case "GET_REPOSITORY_FAILURE":
            return {
                repository:false,
                getRepositoryFetch:false,
                getRepositorySuccess:false,
                getRepositoryFailure:true
            }
        default:
            break;
    }
    return state;
}

export default searchRepositoryRedurcer;