import React, { Component } from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import ContactUs from './ContactUsComponent';
import DishDetail from "./DishDetailComponent";
import About from './AboutComponent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        dishes: state.dishes,
        comments: state.comments,
        promotions: state.promotions,
        leaders: state.leaders
    }
};

class Main extends Component {
    render(){
        const HomePage = ()=>{
            return(
                <Home 
                    dish={this.props.dishes.filter((dish) => dish.featured)[0]}
                    promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
                    leader={this.props.leaders.filter((leader) => leader.featured)[0]}
                />
            );
        };

        const DishWithId = ({match}) => {
            return(
                <DishDetail 
                    dish={this.props.dishes.find(({id}) => id === parseInt(match.params.dishId, 10))}
                    comments={this.props.comments.filter(({dishId}) => dishId === parseInt(match.params.dishId, 10))}
                />
            );
        };

        return (
        <div>
            <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/menu' component={() => <Menu dishes={this.props.dishes} onClick={()=>null}/>} />
                    <Route path="/menu/:dishId" component={DishWithId}/>
                    <Route exact path="/aboutus" component={()=> <About leaders={this.props.leaders}/>}/>
                    <Route exact path='/contactus' component={()=> <ContactUs />} />
                    <Redirect to="/home" />
                </Switch>
            <Footer />
        </div>
        );
    }
}

export default withRouter(connect(mapStateToProps)(Main));
