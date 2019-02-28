import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Navbar, InputGroup, FormControl, Button} from 'react-bootstrap';
import {setStateFormSearch, getRepositoriesFetch} from '../../actions/searchActions';

class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            repo_search: ''
        };
        this.handleChange=this.handleChange.bind(this);
        this.searchRepo = this.searchRepo.bind(this);
    }
    searchRepo(search) {
        window.location = '/repositorios/'+search+'/1';
    }
    handleChange(e) {
        this.setState({ repo_search: e.target.value });
    }
    render(){
        return (
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">
                    Test
                </Navbar.Brand>
                {this.props.searchReducer.showFormSearch && <InputGroup >
                    <FormControl
                    placeholder="Nombre Repositorio ..."
                    aria-label="Nombre Repositorio ..."
                    aria-describedby="basic-addon2"
                    value = {this.state.repo_search}
                    onChange={this.handleChange}
                    />
                    <InputGroup.Append>
                    <Button disabled={!this.state.repo_search} variant="outline-info"
                        onClick={() => this.searchRepo(this.state.repo_search)}>Buscar</Button>
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
            setStateFormSearch: bindActionCreators((showFormSearch) => setStateFormSearch(showFormSearch), dispatch),
            getRepositoriesFetch: bindActionCreators(() => getRepositoriesFetch(), dispatch)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);