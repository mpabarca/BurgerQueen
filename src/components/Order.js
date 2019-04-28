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
            choiceMenu:[],
            order:[],
            total:0,
            timeS:'',
            timeN:0
        }
    }
    updateName=(name)=>{
        let nameClient=name
        this.setState({
            name:nameClient
        });
    }
    checkChoice=(menu)=>{
        this.setState({
            choiceMenu:menu
        });
    }
    render(){
        return(
            <div>
                <Client
                    updateName={this.updateName}
                />
                <ChoiceMenu
                    checkChoice={this.checkChoice}/>
                <Menu/>
                <Resume/>

            </div>
        )
    }
}

export default Order