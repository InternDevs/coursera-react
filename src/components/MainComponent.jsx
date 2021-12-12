import React, { Component } from 'react';
import Header from './HeaderComponent';
import Menu from './MenuComponent';
import DishDetail from "./DishDetailComponent";
import Footer from './FooterComponent';
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
            <Header />
            <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
            <DishDetail dish={this.state.dishes.find(({id})=> id === this.state.selectedDish)}/>
            <Footer />
        </div>
        );
    }
}

export default Main;
