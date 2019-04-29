import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import {breakfast} from '../json/breakfast.json';
import {other} from '../json/other.json';

// COMPONENTE PRINCIPAL 1° HU

class ChoiceMenu extends Component{

    checkChoice=(e)=>{
        e.preventDefault();
        let choice=((e.target.value==='breakfast')?(breakfast):(other));
        this.props.checkChoice(choice);
        
    }
    render(){
        return(
            <div>
                <Button type="submit" value="breakfast" onClick={this.checkChoice}>DESAYUNO</Button>
                <Button type="submit" value="other" onClick={this.checkChoice}>ALMUERZO Y CENA</Button>
                
            </div>
        )
    }
}

export default ChoiceMenu;