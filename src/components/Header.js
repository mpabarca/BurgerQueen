import React from 'react';
import './css/header.css';
import {Navbar, Button} from 'react-bootstrap';

const Header = () =>{
    return(
        <Navbar bg="light" variant="light" className="containerHeader">
            <Button >REALIZAR PEDIDO</Button>
            <Button >CENTRAL</Button>
            <Button >COCINA</Button>
        </Navbar>
    )
}

export default Header;