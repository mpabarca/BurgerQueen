import React, {Component} from 'react';

// COMPONENTE PRINCIPAL 1° HU

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
            name:this.nameRef.current.value
        });
        this.props.updateName(this.state.name);

    }


    render(){
        const showClient = (this.state.showName ? (' PEDIDO DE '+(this.state.name).toUpperCase()):' ');
        return(
            <div>
                <form onSubmit={this.updateName}>
                    <h4>Ingresar nombre Cliente</h4>
                    <input type="text" ref={this.nameRef} ></input>
                    <button type="submit">ENVIAR</button>
                </form>
                <h5>{showClient}</h5>
            </div>
        )
    }
}

export default Client;