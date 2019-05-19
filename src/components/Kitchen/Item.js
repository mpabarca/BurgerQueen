import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import Food from './Food';


class Item extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const item =this.props.info;
        
        console.log(item.order);
        return(
            <tr>
                <td>{this.props.number+1}</td>
                <td>{item.timeS}</td>
                <td>{item.name}</td>
                <td>{(item.order).map(food =>{
                        return(<Food name={food.name}/>)
                    })}
                </td>
                <td>{'Tiempo : '}</td>
                <td><Button variant="success" value={this.props.number}>LISTO</Button></td>
            </tr>
        )
    }
}
export default Item;