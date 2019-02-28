import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {setStateFormSearch, getRepositoryFetch, getCommitsFetch} from '../actions/searchActions';
import InfoRepo from '../components/InfoRepo';
import Branches from '../components/Branches';
import Commits from '../components/Commits';

class Repository extends Component{
    constructor(props){
        super(props);
        this.state = {
            selectedBranch:false
        }
        this.changeBranch = this.changeBranch.bind(this);
        console.log(Branches);
    }
    componentWillMount(){
        let params = this.props.match.params;
        this.props.actions.getRepositoryFetch(params.owner, params.nameRepo);
        this.props.actions.setStateFormSearch(true);
    }
    changeBranch(newBranch){
        let params = this.props.match.params;
        this.props.actions.getCommitsFetch(params.owner, params.nameRepo, newBranch);
    }
    render(){
        return (
            <div className="container">
                {this.props.searchRepositoryReducer.repository.info && <InfoRepo info={this.props.searchRepositoryReducer.repository.info} />}
                {this.props.searchRepositoryReducer.repository.branches && <Branches branches={this.props.searchRepositoryReducer.repository.branches} selectedBranch={this.state.selectedBranch} changeBranch={this.changeBranch} />}
                {this.props.searchCommitsReducer.commits && <Commits commits={this.props.searchCommitsReducer.commits} />}
                {!this.props.searchRepositoryReducer.repository.info && !this.props.searchRepositoryReducer.repository.branches &&<div className=" col-xl-10 col-xl-offset-1 col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1">
                    <div className=" col-xl-10 col-xl-offset-1 col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1">
                        <h4>NO SE ENCONTRO EL REPOSITORIO</h4>
                    </div>
                </div>}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        searchReducer: state.searchReducer,
        searchRepositoryReducer: state.searchRepositoryReducer,
        searchCommitsReducer: state.searchCommitsReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: {
            setStateFormSearch: bindActionCreators((showFormSearch) => setStateFormSearch(showFormSearch), dispatch),
            getRepositoryFetch: bindActionCreators((search, page) => getRepositoryFetch(search, page), dispatch),
            getCommitsFetch: bindActionCreators((owner, nameRepo, branch) => getCommitsFetch(owner, nameRepo, branch), dispatch)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Repository);