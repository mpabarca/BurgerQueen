import React from 'react';
import {Link} from 'react-router-dom';
import './header.css';
import {Navbar, Button} from 'react-bootstrap';

const Header = () =>{
    return(
        <Navbar bg="light" variant="light" className="containerHeader">
            <Link to="/Order"><Button >REALIZAR PEDIDO</Button></Link>
            <Button >CENTRAL</Button>
            <Link to="/Kitchen"><Button >COCINA</Button></Link>
        </Navbar>
    )
}

export default Header;