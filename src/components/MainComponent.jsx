import React, { Component } from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import ContactUs from './ContactUsComponent';
import DishDetail from "./DishDetailComponent";
import About from './AboutComponent';
import Footer from './FooterComponent';
import {comments} from '../shared/comments.json'
import {dishes} from '../shared/dishes.json';
import {promotions} from '../shared/promotions.json';
import {leaders} from '../shared/leaders.json';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            dishes,
            comments,
            promotions,
            leaders
        };
    }

    render(){
        const HomePage = ()=>{
            return(
                <Home 
                    dish={this.state.dishes.filter((dish) => dish.featured)[0]}
                    promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
                    leader={this.state.leaders.filter((leader) => leader.featured)[0]}
                />
            );
        };

        const DishWithId = ({match}) => {
            return(
                <DishDetail 
                    dish={this.state.dishes.find(({id}) => id === parseInt(match.params.dishId, 10))}
                    comments={this.state.comments.filter(({dishId}) => dishId === parseInt(match.params.dishId, 10))}
                />
            );
        };

        return (
        <div>
            <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} onClick={()=>null}/>} />
                    <Route path="/menu/:dishId" component={DishWithId}/>
                    <Route exact path="/aboutus" component={()=> <About leaders={this.state.leaders}/>}/>
                    <Route exact path='/contactus' component={()=> <ContactUs />} />
                    <Redirect to="/home" />
                </Switch>
            <Footer />
        </div>
        );
    }
}

export default Main;
