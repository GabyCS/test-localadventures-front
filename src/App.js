import React, { Component } from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './containers/Dashboard';
import Header from './components/Header';
import RepositoriesList from './components/Repositories';
import ComponentTestRedux from './components/testComponents';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route exact path = '/repositorios/:search/:page' component={RepositoriesList} />
            <Route exact path = '/repo/:nameOwner/:nameRepo' component={RepositoriesList} />
					  <Route exact path = '/test' component={ComponentTestRedux} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
