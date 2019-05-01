import React, {Component} from 'react';
import './css/App.css';
import Header from './components/Header';
import Order from './components/Order/Order';
require('firebase/auth');

class App extends Component{
  render(){
    return (
      <div >
        <Header/>
        <Order/>
      </div>
    );
  }
}

export default App;
