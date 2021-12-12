import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import DishDetail from "./DishDetailComponent";
import {dishes} from '../shared/dishes.json';

class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
        dishes,
        selectedDish: null
        };
    }

    onDishSelect(dishId) {
        if(this.state.selectedDish === dishId) return this.setState({ selectedDish: null});
        this.setState({ selectedDish: dishId});
    }

    render(){
        return (
        <div>
            <Navbar dark color='dark'>
            <div className='container'>
                <NavbarBrand href='/'>Ristorante Con Fusion</NavbarBrand>
            </div>
            </Navbar>
            <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
            <DishDetail dish={this.state.dishes.find(({id})=> id === this.state.selectedDish)}/>
        </div>
        );
    }
}

export default Main;
