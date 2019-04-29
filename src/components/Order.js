import React, {Component} from 'react';
import Client from './Client';
import ChoiceMenu from './ChoiceMenu';
import Menu from './Menu.js';
import Resume from './Resume';
import { Container, Row, Col, Button } from 'react-bootstrap';

// COMPONENTE PRINCIPAL 1° HU

class Order extends Component{
    constructor(props){
        super(props);
        this.state={
            name:'',
            choiceMenu:[],
            order:[],
            total:0,
            timeS:'',
            timeN:0
        }
    }
    updateName=(name)=>{
        let nameClient=name
        this.setState({
            name:nameClient
        });
    }
    checkChoice=(menu)=>{
        this.setState({
            choiceMenu:menu
        });
    }
    getFood=(food)=>{
        let newOrder=[...this.state.order, food]
        this.setState({
            order: newOrder
        })
    }

    render(){
        return(
            <Row>
                <Col>
                    <Client
                        updateName={this.updateName}
                    />
                    <ChoiceMenu
                        checkChoice={this.checkChoice}
                    />
                    <Menu
                        choiceMenu={this.state.choiceMenu}
                        getFood={this.getFood}
                    />
                </Col>
                <Col>
                    <Button>Nuevo Cliente</Button>
                    <Resume/>
                </Col>
            </Row>
        )
    }
}

export default Order