import React, {Component} from 'react';
import {Card, Button, InputGroup, FormControl} from 'react-bootstrap';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { push  } from 'react-router-redux'
import {getRepositoriesFetch} from '../../actions/searchActions';
class  Search extends Component {
    constructor(props){
        super(props);
        this.state = {
            repo_search: ''
        };
        this.handleChange=this.handleChange.bind(this);
        this.searchRepo = this.searchRepo.bind(this);
    }
    searchRepo(search) {
        this.props.actions.getRepositoriesFetch(search, 1);
    }
    handleChange(e) {
        this.setState({ repo_search: e.target.value });
    }
    render(){
        return (
            <Card style={{ width:'80%',margin:'10%' }}>
                <Card.Body>
                    <Card.Title>
                        Comienza a Buscar.
                    </Card.Title>
                    <InputGroup className="mb-3">
                        <FormControl
                        placeholder="Nombre Repositorio ..."
                        aria-label="Nombre Repositorio ..."
                        aria-describedby="basic-addon2"
                        value = {this.state.repo_search}
                        onChange={this.handleChange}
                        />
                        <InputGroup.Append>
                            <Button variant="outline-info"
                                onClick={() => this.searchRepo(this.state.repo_search)}>Buscar</Button>
                        </InputGroup.Append>
                    </InputGroup>
                </Card.Body>
            </Card>
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
            getRepositoriesFetch: bindActionCreators((search, page) => getRepositoriesFetch(search, page), dispatch)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);