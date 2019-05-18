import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './components/Order/css/index.css';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App.js';
import * as serviceWorker from './serviceWorker';
import Order from './components/Order/Order';
import Kitchen from './components/Kitchen/Kitchen';

ReactDOM.render(
<Router basename={process.env.PUBLIC_URL}>
    <div>
        <Route exact path='/' component={App} />
        <Route exact path='/order' component={Order} />
        <Route exact path='/kitchen' component={Kitchen} />
    </div>

</Router>, document.getElementById('root'));
serviceWorker.unregister();
