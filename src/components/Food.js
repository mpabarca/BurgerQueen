import React, {Component} from 'react';

// COMPONENTE PRINCIPAL 1° HU

class Food extends Component{
    render(){
        const {name,price}=this.props.info;
        console.log(name);
        console.log('desde Food');
        return(
            <div>
                HOLA
            </div>
        )
    }
}

export default Food;