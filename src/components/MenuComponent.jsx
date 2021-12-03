import React, { Component } from "react";
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, CardHeader } from 'reactstrap';
import DishDetail from "./DishDetailComponent";

class Menu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedDish: null
        };
    }

    onDishSelect(dish) {
        if(this.state.selectedDish === dish) return this.setState({ selectedDish: null});
        this.setState({ selectedDish: dish});
    }

    render() {
        const menu = this.props.platos.map((dish) => {
            return (
              <div className="col-12 col-md-5 m-1">
                <Card key={dish.id} onClick={() => this.onDishSelect(dish)}>
                  <CardImg width="100%" src={dish.image} alt={dish.name} />
                </Card>
              </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <DishDetail dish={this.state.selectedDish} />
            </div>
        );
    }
}
export default Menu;