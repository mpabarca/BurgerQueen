import React, {Component} from 'react';
import { Row, Col, Button, Table } from 'react-bootstrap';
import Item from './Item';
import '../header.css';

class Kitchen extends Component{
    constructor(props){
        super(props);

    }

    render(){
        return(
            <div>
                <Table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>HORA</th>
                            <th>CLIENTE</th>
                            <th>PEDIDO</th>
                            <th>TERMINADO</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>0</td>
                            <td>12:33</td>
                            <td>Laura</td>
                            <td>Hamburguesa Simple, Agua</td>
                        </tr>
                        {Object.keys(this.props.clients).map((key,i)=>(
                            <Item
                                number={i}
                                key={key}
                                info={this.props.clients[key]}
                            />
                        ))}
                    </tbody>
                </Table>

            </div>
        )
    }
}
export default Kitchen;