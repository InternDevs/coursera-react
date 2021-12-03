import React,{ Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle, CardHeader, CardSubtitle } from 'reactstrap';

class DishDetail extends Component{
    renderDish(dish){
        return (
            <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardHeader>
                    <CardTitle tag="h3">{dish.name}</CardTitle>
                    <CardSubtitle className="mb-2 text-muted" tag="h6">Categoria: {dish.category}</CardSubtitle>
                </CardHeader>
                <CardBody>
                    <CardText>{dish.description}</CardText>
                    <CardText className="text-muted">${dish.price}</CardText>
                </CardBody>
            </Card>
        )
    }

    renderComments(dish){
        if(dish.comments !== null && dish.comments.length > 0){
            const comments = dish.comments.map(comment => {
                return(
                    <li key={comment.id} id={`comment-id-${comment.id}`}>
                        <h5>{comment.comment}</h5>
                        <p>--{comment.author}, {comment.date}</p>
                    </li>
                );
            })

            return(
                <ul className="list-unstyled">
                    {comments}
                </ul>
            );
        }else{
            return(
                <div></div>
            );
        }
    }

    render(){
        if (this.props.dish != null){
            return(
                <div className="row mt-3 mb-3 pt-md-3 pb-md-3 pr-md-5 pl-md-5">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(this.props.dish)}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <h4 className="text-center">Comments</h4>
                        {this.renderComments(this.props.dish)}
                    </div>
                </div>
            );
        }else
            return(
                <div></div>
            );
    }
}

export default DishDetail;