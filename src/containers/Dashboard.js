import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {setStateFormSearch} from '../actions/searchActions';
import Search from '../components/Search';

class Dashboard extends Component {
    constructor(props){
        super(props);
        this.props.actions.setStateFormSearch(false);
    }
    render(){
        return (
            <Search />
        );
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
            setStateFormSearch: bindActionCreators((showFormSearch) => setStateFormSearch(showFormSearch), dispatch)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);