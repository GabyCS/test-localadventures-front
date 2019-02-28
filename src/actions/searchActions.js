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
    success(data, search, page){
        window.sessionStorage.setItem('list_repos', JSON.stringify(data) )
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

const getRepositoriesFetch = (search, page) => {
    let getRepositories = new GetRepositories();
    console.log(getRepositories);
    return (dispatch) => {
        dispatch(getRepositories.fetch())
        getRepositoriesGit(search, page)
        .then((response) => {
            dispatch(getRepositories.success(response,search, page))
            //window.location = "/repositorios?s="+search+"&p="+page;
        })
        .catch((err) => {
            dispatch(getRepositories.failure(err))
        });
    }
}

export {setStateFormSearch, getRepositoriesFetch}