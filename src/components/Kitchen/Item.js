import React, {Component} from 'react';
import {Button} from 'react-bootstrap';


class Item extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const item =this.props.info;
        let textOrder='';

        console.log(item.order);
        return(
            <tr>
                <td>{this.props.number+1}</td>
                <td>{item.timeS}</td>
                <td>{item.name}</td>
                <td>{item.order}</td>
                <td><Button variant="success" value={this.props.number}>LISTO</Button></td>
            </tr>
        )
    }
}
export default Item;