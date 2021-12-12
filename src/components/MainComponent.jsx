import React, { Component } from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import DishDetail from "./DishDetailComponent";
import Footer from './FooterComponent';
import {dishes} from '../shared/dishes.json';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            dishes,
        };
    }

    render(){
        const HomePage = ()=>{
            return(<Home />)
        };

        return (
        <div>
            <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} onClick={()=>null}/>} />
                    <Redirect to="/home" />
                </Switch>
            <Footer />
        </div>
        );
    }
}

export default Main;
