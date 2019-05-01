import React, {Component} from 'react';
import './css/resume.css';
import {Table, Button} from 'react-bootstrap';
import Item from './Item';

// COMPONENTE PRINCIPAL 1° HU

class Resume extends Component{
    constructor(props){
        super(props);
        this.deleteFood=this.deleteFood.bind(this);
        this.sendKitchen=this.sendKitchen.bind(this);
    }
    deleteFood(key){
        this.props.deleteFood(key);
    }
    sendKitchen(e){
        e.preventDefault();
        this.props.sendKitchen(e.target.value);
        alert('Enviado a cocina');
    }
    render(){  
        let totalOrder=0;
        this.props.order.forEach(item=>{
            totalOrder+=parseInt(item.price);
        });
        return(
            <div id="containerResume">
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
                <tbody>
                    <tr>
                        <td>TOTAL:</td>
                        <td>{totalOrder}</td>
                    </tr>
                </tbody>
                </Table>
                <Button variant="success" value={totalOrder} onClick={this.sendKitchen}>ENVIAR A COCINA</Button>
            </div>
        )
    }
}

export default Resume;