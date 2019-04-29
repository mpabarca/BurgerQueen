import React, {Component} from 'react';
import {Button} from 'react-bootstrap';

class Food extends Component{
    constructor(props){
        super(props);
        this.getFood=this.getFood.bind(this);
    }
    getFood(e){
        e.preventDefault();
        this.props.getFood(e.target.value);
    }

    render(){
        const {name,price}=this.props.info;
        const product= name + price;
        return(
            <Button  variant="secondary" size="lg" value={product} onClick={this.getFood} block>
                <h6>{name} {price}</h6>
            </Button>
        )
    }
}

export default Food;