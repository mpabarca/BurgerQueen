import React, {Component} from 'react';
import {Button} from 'react-bootstrap';

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
        const showClient = (this.state.showName ? (' PEDIDO DE '+(this.nameRef.current.value).toUpperCase()):' ');
        return(
            <div>
                <form onSubmit={this.updateName}>
                    <h4>Ingresar nombre Cliente</h4>
                    <input type="text" ref={this.nameRef} ></input>
                    <Button type="submit">ENVIAR</Button>
                </form>
                <h5>{showClient}</h5>
            </div>
        )
    }
}

export default Client;