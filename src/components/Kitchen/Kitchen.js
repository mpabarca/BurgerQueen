import React, {Component} from 'react';
import { Row, Col, Button, Navbar } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '../header.css';

class Kitchen extends Component{

    render(){
        return(
            <div>
                <Navbar bg="light" variant="light" className="containerHeader">
                    <Link to="/Order"><Button >REALIZAR PEDIDO</Button></Link>
                    <Button >CENTRAL</Button>
                    <Link to="/Kitchen"><Button >COCINA</Button></Link>
                </Navbar>
            </div>
        )
    }
}
export default Kitchen;