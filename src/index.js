import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './components/Order/css/index.css';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App.js';
import {Provider} from 'react-redux';
import store from './store';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
, document.getElementById('root'));
serviceWorker.unregister();
