import React, {Component} from 'react';
import Food from './Food';

// COMPONENTE PRINCIPAL 1° HU

class Menu extends Component{
    render(){
        
        return(
            <div>
                {Object.keys(this.props.choiceMenu).map(key=>(
                    <Food
                        key={key}
                        info={this.props.choiceMenu[key]}
                    />
                ))}

            </div>
        )
    }
}

export default Menu;