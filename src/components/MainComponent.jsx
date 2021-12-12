import React, { Component } from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import DishDetail from "./DishDetailComponent";
import Footer from './FooterComponent';
import {dishes} from '../shared/dishes.json';
import {promotions} from '../shared/promotions.json';
import {leaders} from '../shared/leaders.json';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            dishes,
            promotions,
            leaders
        };
    }

    render(){
        const HomePage = ()=>{
            /* console.table(this.state.dishes.filter((dish) => dish.featured)[0]); */
            return(
                <Home 
                    dish={this.state.dishes.filter((dish) => dish.featured)[0]}
                    promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
                    leader={this.state.leaders.filter((leader) => leader.featured)[0]}
                />
            );
        };

        return (
        <div>
            <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} onClick={()=>null}/>} />
                    <Route path='/contact' component={()=> <Contact />} />
                    <Redirect to="/home" />
                </Switch>
            <Footer />
        </div>
        );
    }
}

export default Main;
