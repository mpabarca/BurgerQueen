import React, {Component} from 'react';
import fire from './components/firebase/Firebase';
import './css/App.css';
import Header from './components/Header';
import Order from './components/Order/Order';
require('firebase/auth');

class App extends Component{
  constructor() {
    super();
    this.state = ({
      user: null,
    });
    this.authListener = this.authListener.bind(this);
  }
  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        this.setState({ user });
        localStorage.setItem('user', user.uid);
      } else {
        this.setState({ user: null });
        localStorage.removeItem('user');
      }
    });
  }
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
