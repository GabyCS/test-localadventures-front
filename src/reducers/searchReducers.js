const searchRedurcer = (state = {
    showFormSearch: true,
    repositories:false,
    repository: false,
    commits: false,
    getRepositoriesFetch:false,
    getRepositoriesSuccess:false,
    getRepositoriesFailure:false,
    getRepositoryFetch:false,
    getRepositorySuccess:false,
    getRepositoryFailure:false,
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
        case "GET_REPOSITORIES_FETCHING":
            return {
                ...state,
                repositories: false,
                getRepositoriesFetch:true,
                getRepositoriesSuccess:false,
                getRepositoriesFailure:false
            }
        case "GET_REPOSITORIES_SUCESS":
            return {
                showFormSearch: true,
                repositories: action.data,
                getRepositoriesFetch:false,
                getRepositoriesSuccess:true,
                getRepositoriesFailure:false
            }
        case "GET_REPOSITORIES_FAILURE":
            return {
                repositories:false,
                getRepositoriesFetch:false,
                getRepositoriesSuccess:false,
                getRepositoriesFailure:true
            }
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

export default searchRedurcer;