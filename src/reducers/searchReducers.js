const searchRedurcer = (state = {
    showFormSearch: true,
    repositories:false,
    getRepositoriesFetch:false,
    getRepositoriesSuccess:false,
    getRepositoriesFailure:false
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
                repositories: action.data,
                getRepositoriesFetch:false,
                getRepositoriesSuccess:true,
                getRepositoriesFailure:false
            }
        case "GET_TAREAS_FAILURE":
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

export default searchRedurcer;