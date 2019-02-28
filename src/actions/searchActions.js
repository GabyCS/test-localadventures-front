import { getRepositoriesGit, getRepositoryGit, getCommitsGit } from '../api/searchApi';

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
    success(data){
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

class GetCommits  {
    constructor(data){
        this.data = data;
    }
    fetch(){
        return {
            type:"GET_COMMITS_FETCHING"
        }
    }
    success(data, search, page){
        return {
            type: "GET_COMMITS_SUCESS",
            data: data
        }
        
    }
    failure(){
        return {
            type: "GET_COMMITS_FAILURE"
        }
    }
}

const getRepositoriesFetch = (search, page) => {
    let getRepositories = new GetRepositories();
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

const getRepositoryFetch = (owner, nameRepo) => {
    console.log(owner);
    let getRepository = new GetRepository();
    return (dispatch) => {
        dispatch(getRepository.fetch())
        getRepositoryGit(owner, nameRepo)
        .then((response) => {
            dispatch(getRepository.success(response))
        })
        .catch((err) => {
            dispatch(getRepository.failure(err))
        });
    }
}

const getCommitsFetch = (owner, nameRepo, branch) => {
    let getCommits = new GetCommits();
    return (dispatch) => {
        dispatch(getCommits.fetch())
        getCommitsGit(owner, nameRepo, branch)
        .then((response) => {
            dispatch(getCommits.success(response))
        })
        .catch((err) => {
            dispatch(getCommits.failure(err))
        });
    }
}

export {setStateFormSearch, getRepositoriesFetch, getRepositoryFetch, getCommitsFetch};