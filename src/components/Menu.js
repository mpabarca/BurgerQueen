import React, {Component} from 'react';
import {Row} from 'react-bootstrap';
import Food from './Food';

class Menu extends Component{

    getFood=(food)=>{
        this.props.getFood(food);

    }
    render(){
        return(
            <Row>
                {Object.keys(this.props.choiceMenu).map(key=>(
                    <Food
                        key={key}
                        info={this.props.choiceMenu[key]}
                        getFood={this.getFood}
                    />
                ))}

            </Row>
        )
    }
}

export default Menu;