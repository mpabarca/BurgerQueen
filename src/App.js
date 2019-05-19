import React, {Component} from 'react';
import './components/Order/css/App.css';
import Header from './components/Header';
import Order from './components/Order/Order';
import Kitchen from './components/Kitchen/Kitchen';

//Redux
import {Provider} from 'react-redux';
import store from './store';

class App extends Component{
  constructor(props){
    super(props);
    this.toKitchen=this.toKitchen.bind(this);
    this.handleMenuChange = this.handleMenuChange.bind(this);
    this.state={
      activeMenu:'order',
      clients:[]
    }
  }
  handleMenuChange(e){
    e.preventDefault();
    this.setState({
      activeMenu:e.target.getAttribute('value')
    })
  }

  toKitchen(client){
    this.setState({
      clients:[...this.state.clients,client]
    })
    console.log(this.state.clients);

  }

  render(){
    return (
      <Provider store={store}>
        <Header
          onClick={this.handleMenuChange}
        />
        {(this.state.activeMenu === 'order') &&
          <Order
            sendKitchen={this.toKitchen}
          />
        }
        {(this.state.activeMenu === 'kitchen') &&
          <Kitchen
            clients={this.state.clients}
          />
        }
      </Provider>
    );
  }
}

export default App;
