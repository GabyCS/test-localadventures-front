import { getRepositoriesGit } from '../api/searchApi';

const setStateFormSearch = (showFormSearch) =>  {
    return {
        type: "SET_STATE_FORM_SEARCH",
        data: showFormSearch
    }
}

class GetRepositories  {
    constructor(data){
        this.data = data;
    }
    fetch(){
        return {
            type:"GET_REPOSITORIES_FETCHING"
        }
    }
    success(data){
        return {
            type: "GET_REPOSITORIES_SUCESS",
            data: data
        }
    }
    failure(){
        return {
            type: "GET_TAREAS_FAILURE"
        }
    }
}

const getRepositoriesFetch = (data) => {
    let getRepositories = new GetRepositories();
    console.log(getRepositories);
    return (dispatch) => {
        dispatch(getRepositories.fetch())
        getRepositoriesGit(data)
        .then((response) => {
            dispatch(getRepositories.success(response))
            
        })
        .catch((err) => {
            dispatch(getRepositories.failure(err))
        });
    }
}

export {setStateFormSearch, getRepositoriesFetch}