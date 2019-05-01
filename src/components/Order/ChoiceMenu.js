import React, {Component} from 'react';
import '../css/choiceMenu.css';
import {Button} from 'react-bootstrap';
import {breakfast} from './json/breakfast.json';
import {other} from './json/other.json';

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
                <Button className="buttonMenu" type="submit" variant="outline-secondary" value="breakfast" onClick={this.checkChoice}>DESAYUNO</Button>
                <Button className="buttonMenu" type="submit" variant="outline-secondary" value="other" onClick={this.checkChoice}>ALMUERZO Y CENA</Button>
                
            </div>
        )
    }
}

export default ChoiceMenu;