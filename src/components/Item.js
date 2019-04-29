import React, {Component} from 'react';
import {Button} from 'react-bootstrap';

class Item extends Component{
    constructor(props){
        super(props);
        this.deleteFood=this.deleteFood.bind(this);
    }
    deleteFood(e){
        e.preventDefault();
        this.props.deleteFood(e.target.value);
    }

    render(){
        const {name,price}=this.props.info;
        return(
            <tr>
                <td>{this.props.number}</td>
                <td>{name}</td>
                <td>{price}</td>
                <td>
                    <Button variant="danger" value={this.props.number} onClick={this.deleteFood}>X</Button>
                </td>
          </tr>
        )
    }
}
export default Item;