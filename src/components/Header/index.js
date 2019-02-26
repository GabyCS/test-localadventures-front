import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Navbar, InputGroup, FormControl, Button} from 'react-bootstrap';
import {setStateFormSearch} from '../../actions/searchActions';

class Header extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">
                    Test
                </Navbar.Brand>
                {this.props.searchReducer.showFormSearch && <InputGroup sm >
                    <FormControl
                    placeholder="Nombre Repositorio ..."
                    aria-label="Nombre Repositorio ..."
                    aria-describedby="basic-addon2"
                    />
                    <InputGroup.Append>
                    <Button variant="outline-info">Buscar</Button>
                    </InputGroup.Append>
                </InputGroup>}
            </Navbar>
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

export default connect(mapStateToProps, mapDispatchToProps)(Header);