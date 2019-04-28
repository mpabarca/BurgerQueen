import React, {Component} from 'react';
import Client from './Client';
import ChoiceMenu from './ChoiceMenu';
import Menu from './Menu.js';
import Resume from './Resume';

// COMPONENTE PRINCIPAL 1° HU

class Order extends Component{
    constructor(props){
        super(props);
        this.state={
            name:'',
            order:[],
            total:0,
            timeS:'',
            timeN:0
        }
        this.updateName=this.updateName.bind(this);
    }
    updateName(name){
        let nameClient=name
        this.setState({
            name:nameClient
        });
        console.log(this.state.name)
    }
    render(){
        return(
            <div>
                <Client
                    updateName={this.updateName}
                />
                <ChoiceMenu
                    name={this.state.name}/>
                <Menu/>
                <Resume/>

            </div>
        )
    }
}

export default Order