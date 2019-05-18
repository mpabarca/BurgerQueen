import React, {Component} from 'react';
import './components/Order/css/App.css';
import Header from './components/Header';
import Order from './components/Order/Order';

//Redux
import {Provider} from 'react-redux';
import store from './store';

class App extends Component{
  constructor(props){
    super(props);
    this.state={

    }
  }
  render(){
    return (
      <Provider store={store} >

        <Header/>
        <Order/>
        
      </Provider>
    );
  }
}

export default App;
