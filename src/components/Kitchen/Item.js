import React, {Component} from 'react';
import {Button} from 'react-bootstrap';


class Item extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const item =this.props.info;
        console.log(item);
        return(
            <tr>
                <td>{this.props.number+1}</td>
                <td>{item.timeS}</td>
                <td>{item.name}</td>
                <td><Button variant="success" value={this.props.number}><i className="fas fa-check"></i></Button></td>
            </tr>
        )
    }
}
export default Item;