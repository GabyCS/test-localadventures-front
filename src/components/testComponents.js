import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {setStateFormSearch} from '../actions/searchActions';

class ComponentTestRedux extends Component {
    constructor(props){
        super(props);
        this.props.actions.setStateFormSearch(true);
        this.converteName = this.converteName.bind(this);
    }
    converteName(){
        this.props.actions.setStateFormSearch(true);
    }
    render(){
        console.log(this.props.searchReducer.showFormSearch)
        return(
            <div>
                <h1>{this.props.searchReducer.showFormSearch}</h1>
                <a onClick={() => this.converteName()}>Test name</a>
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(ComponentTestRedux);