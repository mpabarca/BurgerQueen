import React, {Component} from 'react';
import { Row, Col, Button, Table } from 'react-bootstrap';
import '../header.css';

class Kitchen extends Component{

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
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>0</td>
                            <td>12:33</td>
                            <td>Laura</td>
                            <td>Hamburguesa Simple, Agua</td>
                        </tr>
                        <tr>
                            <td>0</td>
                            <td>12:33</td>
                            <td>Laura</td>
                            <td>Hamburguesa Simple, Agua</td>
                        </tr>
                    </tbody>
                </Table>

            </div>
        )
    }
}
export default Kitchen;