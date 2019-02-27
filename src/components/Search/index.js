import React, {Component} from 'react';
import {Card, Button, InputGroup, FormControl} from 'react-bootstrap';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { push  } from 'react-router-redux'
import {getRepositoriesFetch} from '../../actions/searchActions';
class  Search extends Component {
    constructor(props){
        super(props);
        this.redirectToRepos.bind(this);
    }
    redirectToRepos(){
        console.log('entro', this.context);
        this.context.router('/repositorios');
    }
    render(){
        if(this.props.searchReducer.repositories){
            this.redirectToRepos();
        }
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
                        />
                        <InputGroup.Append>
                            <Button variant="outline-info"
                                onClick={this.props.actions.getRepositoriesFetch}>Buscar</Button>
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
            getRepositoriesFetch: bindActionCreators(() => getRepositoriesFetch(), dispatch)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);