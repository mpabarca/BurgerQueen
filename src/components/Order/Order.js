import React, {Component} from 'react';
import './css/order.css';
import Client from './Client';
import ChoiceMenu from './ChoiceMenu';
import Menu from './Menu';
import Resume from './Resume';
import { Row, Col, Button } from 'react-bootstrap';


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
        let newFood=food.split('$');
        let foodObject={
            name: newFood[0],
            price: newFood[1]
        }
        let newOrder=[...this.state.order, foodObject]
        this.setState({
            order: newOrder
        })
    }
    deleteFood=(key)=>{
        let newOrder=[...this.state.order];
        newOrder.splice(key,1);
        this.setState({
            order:newOrder
        })
    }
    newClient=()=>{
        this.setState({
            name:'',
            choiceMenu:[],
            order:[],
            total:0,
            timeS:'',
            timeN:0 
        })
    }
    sendKitchen=(newTotal)=>{
        this.setState({
            total:newTotal
        });
        let orderString=[];
        (this.state.order).forEach(food=>{orderString.push(food.name)});
        
        let date=new Date();
        let dateString=date.getHours()+':'+date.getMinutes();
        let dateNumber=date.getTime();

        let client={
            name:this.state.name,
            delivery: false,
            total: parseInt(this.state.total),
            timeS:dateString,
            timestamp:dateNumber,
            order: orderString
        };        
    }
    componentDidMount(){
        const nameLS=localStorage.getItem('name');
        const orderLS=localStorage.getItem('order');
        const totalLS=localStorage.getItem('total');
        if (nameLS){
            this.setState({
                name:JSON.parse(nameLS)
            })
        }
        if (orderLS){
            this.setState({
                order:JSON.parse(orderLS)
            })
        }
        if (totalLS){
            this.setState({
                total:JSON.parse(totalLS)
            })
        }
    }
    componentDidUpdate(){
        localStorage.setItem('name',JSON.stringify(this.state.name));
        localStorage.setItem('order',JSON.stringify(this.state.order));
        localStorage.setItem('total',JSON.stringify(this.state.total));
    }

    render(){
        return(
            <Row className="containerOrder">
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
                    <Row>
                        <Col>
                            <div id="nameClient">{(this.state.name).toUpperCase()}</div>
                        </Col>
                        <Col>
                            <Button variant="outline-secondary" onClick={this.newClient}>Nuevo Cliente</Button>
                        </Col>
                    </Row>
                    <Resume
                        order={this.state.order}
                        deleteFood={this.deleteFood}
                        sendKitchen={this.sendKitchen}
                    />
                </Col>
            </Row>
        )
    }
}

export default Order;