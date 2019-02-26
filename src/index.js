import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import {Provider} from 'react-redux';
import App from './App';
import store from './store.js';
import * as serviceWorker from './serviceWorker';
import ComponentTestRedux from './components/testComponents';

ReactDOM.render(
    <Provider store={store}>
        <div className="App">
			<BrowserRouter>
				<Switch>
					
					<Route exact path = '/test' component={ComponentTestRedux} />
				</Switch>
			</BrowserRouter>
		</div>
    </Provider>, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
