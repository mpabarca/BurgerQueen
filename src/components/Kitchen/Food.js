import React, {Component} from 'react';
import {InputGroup} from 'react-bootstrap';

class Food extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <InputGroup.Text id="basic-addon1">{this.props.name}</InputGroup.Text>
        )
    }
}
export default Food;