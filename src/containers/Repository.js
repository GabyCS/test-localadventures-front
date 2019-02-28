import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {setStateFormSearch, getRepositoryFetch} from '../actions/searchActions';
import InfoRepo from '../components/InfoRepo';
import Branches from '../components/Branches';

class Repository extends Component{
    constructor(props){
        super(props);
    }
    componentWillMount(){
        let params = this.props.match.params;
        this.props.actions.getRepositoryFetch(params.owner, params.nameRepo);
    }
    render(){
        return (
            <div className="container">
                {this.props.searchReducer.repository.info && <InfoRepo info={this.props.searchReducer.repository.info} />}
                {this.props.searchReducer.repository.branches && <Branches branches={this.props.searchReducer.repository.branches} />}
                {!this.props.searchReducer.repository.info && !this.props.searchReducer.repository.branches &&<div className=" col-xl-10 col-xl-offset-1 col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1">
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
        searchReducer: state.searchReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: {
            setStateFormSearch: bindActionCreators((showFormSearch) => setStateFormSearch(showFormSearch), dispatch),
            getRepositoryFetch: bindActionCreators((search, page) => getRepositoryFetch(search, page), dispatch)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Repository);