import { getRepositoriesGit, getRepositoryGit } from '../api/searchApi';

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
        return {
            type: "GET_REPOSITORIES_SUCESS",
            data: data
        }
        
    }
    failure(){
        return {
            type: "GET_REPOSITORIES_FAILURE"
        }
    }
}

class GetRepository  {
    constructor(data){
        this.data = data;
    }
    fetch(){
        return {
            type:"GET_REPOSITORY_FETCHING"
        }
    }
    success(data, search, page){
        return {
            type: "GET_REPOSITORY_SUCESS",
            data: data
        }
        
    }
    failure(){
        return {
            type: "GET_REPOSITORY_FAILURE"
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
        })
        .catch((err) => {
            dispatch(getRepositories.failure(err))
        });
    }
}

const getRepositoryFetch = (search, page) => {
    let getRepository = new GetRepository();
    console.log(getRepository);
    return (dispatch) => {
        dispatch(getRepository.fetch())
        getRepositoryGit(search, page)
        .then((response) => {
            dispatch(getRepository.success(response,search, page))
        })
        .catch((err) => {
            dispatch(getRepository.failure(err))
        });
    }
}

export {setStateFormSearch, getRepositoriesFetch, getRepositoryFetch}