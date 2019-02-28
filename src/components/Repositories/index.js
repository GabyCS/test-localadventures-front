import React, {component, Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Card, Button, Col, Container, Row, Image} from 'react-bootstrap';
import {setStateFormSearch, getRepositoriesFetch} from '../../actions/searchActions';
import TimeAgo from 'react-timeago'
import spanishStrings from 'react-timeago/lib/language-strings/es'
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter'
import './index.css';
import Pagination from "react-js-pagination";

class RepositoriesList extends Component{
    constructor(props){
        super(props);
        this.state ={
            activePage: parseInt(this.props.match.params.page)
        }
        this.props.actions.setStateFormSearch(true);
        this.renderListRepos.bind(this);
        this.handlePageChange = this.handlePageChange.bind(this);
    }
    componentWillMount(){
        let params = this.props.match.params;
        if(params.search && params.page){
            this.props.actions.getRepositoriesFetch(params.search, params.page);
        }
    }
    handlePageChange(pageNumber) {
        if(pageNumber !== this.props.match.params.page){
            this.props.actions.getRepositoriesFetch(this.props.match.params.search, pageNumber);
            window.history.pushState(null, null, '/repositorios/'+this.props.match.params.search+'/'+pageNumber);
        }
         this.setState({activePage: pageNumber});
    }
    renderListRepos(repos){
        const formatter = buildFormatter(spanishStrings)
        let items = repos.items;
        return  items.map(i => {
            return <Row key={i.id}>
                    <Col xl={{span:8, offset:2}} lg={{span:8, offset:2}} md={{span:10, offset:1}}>
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
                                        <div><i className="fas fa-star star-color"></i> {i.stargazers_count}</div>
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
        return (
            <Container>
                <h1>REPOSITORIOS</h1>
                {this.props.searchReducer.repositories && 
                    this.renderListRepos(this.props.searchReducer.repositories)}
                {this.props.searchReducer.repositories && 
                    <Row><Col xl={{span:8, offset:2}} lg={{span:8, offset:2}} md={{span:10, offset:1}}><Pagination
                    innerClass="pagination"
                    itemClass="page-item"
                    linkClass="page-link"
                    disabledClass="disabled"
                    activeClass="active"
                    prevPageText='prev'
                    nextPageText='next'
                    firstPageText='first'
                    lastPageText='last'
                    activePage={this.state.activePage}
                    itemsCountPerPage={20}
                    totalItemsCount={(this.props.searchReducer.repositories.total_count > 1000)?600:this.props.searchReducer.repositories.total_count}
                    pageRangeDisplayed={5}
                    onChange={this.handlePageChange}
                    /></Col></Row>}
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
            setStateFormSearch: bindActionCreators((showFormSearch) => setStateFormSearch(showFormSearch), dispatch),
            getRepositoriesFetch: bindActionCreators((search, page) => getRepositoriesFetch(search, page), dispatch)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RepositoriesList);