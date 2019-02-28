const searchRepositoriesRedurcer = (state = {
    repositories:false,
    getRepositoriesFetch:false,
    getRepositoriesSuccess:false,
    getRepositoriesFailure:false
}, action) => {
    switch(action.type){
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
        default:
            break;
    }
    return state;
}

export default searchRepositoriesRedurcer;