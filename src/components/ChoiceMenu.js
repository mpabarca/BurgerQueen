import React, {Component} from 'react';
import {breakfast} from '../json/breakfast.json';
import {other} from '../json/other.json';

// COMPONENTE PRINCIPAL 1° HU

class ChoiceMenu extends Component{
    constructor(props){
        super(props);
    }

    checkChoice=(e)=>{
        e.preventDefault();
        let choice=((e.target.value==='breakfast')?(breakfast):(other));
        this.props.checkChoice(choice);
        
    }
    render(){
        return(
            <div>
                <form >
                    <button type="submit" value="breakfast" onClick={this.checkChoice}>DESAYUNO</button>
                    <button type="submit" value="other" onClick={this.checkChoice}>ALMUERZO Y CENA</button>
                </form>
                
            </div>
        )
    }
}

export default ChoiceMenu;