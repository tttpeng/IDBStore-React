/* jshint esversion:6 */

import React, {PropTypes, Component} from 'react';
import App from './App';
import configureStore from '../stores/configureStore';
import {Provider} from 'react-redux'
import {Router, Route, browserHistory} from 'react-router'
import {syncHistoryWithStore, routerReducer} from 'react-router-redux'
import reducers from '../reducers/reducers'

const store = configureStore();

const history = syncHistoryWithStore(browserHistory, store)

export default class Root extends Component {
	render() {
		return (
			<Provider store ={store}>
				<Router history={history}>
					<Route path="/" component={App}></Route>
				</Router>
			</Provider>
		);
	}
}
