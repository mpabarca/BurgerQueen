import React, {Component} from 'react';
import './components/Order/css/App.css';
import Header from './components/Header';
import Order from './components/Order/Order';

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
