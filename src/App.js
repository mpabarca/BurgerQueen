import React, {Component} from 'react';
import './components/Order/css/App.css';
import Header from './components/Header';
import Order from './components/Order/Order';

//Redux


class App extends Component{
  constructor(props){
    super(props);
    this.toKitchen=this.toKitchen.bind(this);
    this.state={
      clients:[]
    }
  }
  toKitchen(client){
    console.log(client);
  }

  render(){
    return (
      <div>

        <Header/>
        <Order
          sendKitchen={this.toKitchen}/>
        
      </div>
    );
  }
}

export default App;
