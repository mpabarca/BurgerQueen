import React from 'react';
import './header.css';
import {Navbar, Button} from 'react-bootstrap';

const Header = (props) =>{
    return(
        <Navbar bg="light" variant="light" className="containerHeader">
            <Button value="order" onClick={props.onClick} >REALIZAR PEDIDO</Button>
            <Button value="central" onClick={props.onClick}>CENTRAL</Button>
            <Button value="kitchen" onClick={props.onClick}>COCINA</Button>
        </Navbar>
    )
}

export default Header;