import React, {component, Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Card, Button, Col, Container, Row, Image} from 'react-bootstrap';
import {setStateFormSearch} from '../../actions/searchActions';
import TimeAgo from 'react-timeago'
import spanishStrings from 'react-timeago/lib/language-strings/es'
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter'
import './index.css';

class RepositoriesList extends Component{
    constructor(props){
        super(props);
        this.props.actions.setStateFormSearch(true);
        this.renderListRepos.bind(this);
    }
    renderListRepos(repos){
        console.log('entro', repos);
        const formatter = buildFormatter(spanishStrings)
        let items = repos.items;
        return  items.map(i => {
            return <Row>
                    <Col lg={{span:8, offset:2}} lg={{span:8, offset:2}} md={{span:10, offset:1}}>
                        <Card className="mb-3" style={{textAlign:'left'}} >
                            <Card.Body>
                                <div className="div-main">
                                    <div className="div-info-owner img">
                                            <Image src={i.owner.avatar_url} className="img-git" roundedCircle />
                                    </div>
                                    <div className="div-info-owner">
                                        <div className="text-name-owner">{i.owner.login}</div>
                                        <div className="text-name-repo">
                                            <a href={"/repositorios/"+i.full_name}>{i.full_name}</a>
                                        </div>
                                        <div className="text-name-lang">{i.language}</div>
                                        <div className="text-name-desc">{i.description}</div>
                                    </div>
                                    <div className="div-info-repo">
                                        <div><i class="fas fa-star star-color"></i> {i.stargazers_count}</div>
                                    </div>
                                </div>
                                
                            </Card.Body>
                            <Card.Footer className="text-muted">
                                <b>Última Actualización: </b>
                                <TimeAgo date={i.updated_at} formatter={formatter}/>
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>;
        })
    }
    render(){
        if(this.props.searchReducer.repositories){
            console.log('existe', this.props.searchReducer.repositories);
        }
        return (
            <Container>
                <h1>REPOSITORIOS</h1>
                {this.props.searchReducer.repositories && 
                    this.renderListRepos(this.props.searchReducer.repositories)}
                
            </Container>
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

export default connect(mapStateToProps, mapDispatchToProps)(RepositoriesList);