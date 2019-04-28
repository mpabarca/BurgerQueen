import React, {Component} from 'react';
import Client from './Client';
import ChoiceMenu from './ChoiceMenu';
import Menu from './Menu.js';
import Resume from './Resume';

// COMPONENTE PRINCIPAL 1° HU

class Order extends Component{
    render(){
        return(
            <div>
                <Client/>
                <ChoiceMenu/>
                <Menu/>
                <Resume/>

            </div>
        )
    }
}

export default Order