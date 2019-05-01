import React, {Component} from 'react';
import '../css/client.css';
import {Button, Row, Col} from 'react-bootstrap';

class Client extends Component{
    constructor(props){
        super(props);
        this.updateName=this.updateName.bind(this);
        this.nameRef=React.createRef();
        this.state={
            showName:false,
            name:''
        };
    }
    updateName(e){
        e.preventDefault();
        this.setState({
            showName:true,
        });
        this.props.updateName(this.nameRef.current.value);

    }


    render(){
        return(
            <Row id="containerClient">
                <Col>
                    <form onSubmit={this.updateName}>
                        <input id="inputClient" type="text" ref={this.nameRef} placeholder="Ingresar nombre Cliente"></input>
                        <Button type="submit" variant="warning">ENVIAR</Button>
                    </form>
                </Col>
            </Row>
        )
    }
}

export default Client;