import React, {Component} from 'react';
import {Table, Button} from 'react-bootstrap';
import Item from './Item';

// COMPONENTE PRINCIPAL 1° HU

class Resume extends Component{
    constructor(props){
        super(props);
        this.deleteFood=this.deleteFood.bind(this);
    }
    deleteFood(key){
        console.log(key);
        this.props.deleteFood(key);
    }
    render(){    
        return(
            <div>
                <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>PRODUCTO</th>
                        <th>PRECIO</th>
                        <th>BORRAR</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(this.props.order).map((key,i)=>(
                        <Item
                            number={i}
                            key={key}
                            info={this.props.order[key]}
                            deleteFood={this.deleteFood}
                        />
                    ))}
                    

                </tbody>
                </Table>

            </div>
        )
    }
}

export default Resume;