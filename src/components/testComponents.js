import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {setName} from '../actions/testActions';

class ComponentTestRedux extends Component {
    constructor(props){
        super(props);
        this.converteName = this.converteName.bind(this);
    }
    converteName(){
        this.props.actions.setName('Example new name');
    }
    render(){
        return(
            <div>
                <h1>{this.props.testReducer.name}</h1>
                <a onClick={() => this.converteName()}>Test name</a>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        testReducer: state.testReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: {
            setName: bindActionCreators((name) => setName(name), dispatch)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ComponentTestRedux);