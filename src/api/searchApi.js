import {URL_APP} from '../constants'; 

const getRepositoriesGit = (search, page) => {
    return fetch(URL_APP+"/repositories/"+search+"/"+page,{
        'method': 'GET',
        'headers':{
         'Content-type': 'application/json'
        }
    })
    .then((response) => {
        return response.json();
    })
    .then((response) => {
        return response;
    })
}

const getRepositoryGit = (owner, nameRepo) => {
  return fetch(URL_APP+"/repositories/info/"+owner+"/"+nameRepo,{
      'method': 'GET',
      'headers':{
       'Content-type': 'application/json'
      }
  })
  .then((response) => {
      return response.json();
  })
  .then((response) => {
      return response;
  })
}

const getCommitsGit = (owner, nameRepo, branch) => {
  return fetch(URL_APP+"/repositories/info/"+owner+"/"+nameRepo+"/"+branch+"/commits",{
      'method': 'GET',
      'headers':{
       'Content-type': 'application/json'
      }
  })
  .then((response) => {
      return response.json();
  })
  .then((response) => {
      return response;
  })
}

export  {getRepositoriesGit, getRepositoryGit, getCommitsGit}