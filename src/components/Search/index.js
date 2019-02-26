import React, {Component} from 'react';
import {Card, Button, InputGroup, FormControl} from 'react-bootstrap';

class  Search extends Component {
    constructor(props){
        super(props);
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
                        />
                        <InputGroup.Append>
                        <Button variant="outline-info">Buscar</Button>
                        </InputGroup.Append>
                    </InputGroup>
                </Card.Body>
            </Card>
        )
    }
}

export default Search;