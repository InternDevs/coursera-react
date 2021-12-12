import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle, CardHeader, CardSubtitle } from 'reactstrap';


const RenderDish = ({dish}) => {
    return (
        <div className="col-12 col-md-5 m-1">
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
        </div>
    );
};


const RenderComments = ({dish}) => {
    if(dish.comments !== null && dish.comments.length > 0){
        const comments = dish.comments.map(comment => {
            return(
                <li key={comment.id} id={`comment-id-${comment.id}`}>
                    <h5>{comment.comment}</h5>
                    <p>--{comment.author}, {new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
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

const DishDetail = ({dish}) => {
    if (dish != null){
        return(
            <div className="container">
                <div className="row mt-3 mb-3 pt-md-3 pb-md-3 pr-md-5 pl-md-5">
                        <RenderDish dish={dish}/>
                    <div className="col-12 col-md-5 m-1">
                        <h4 className="text-center">Comments</h4>
                        <RenderComments dish={dish}/>
                    </div>
                </div>
            </div>
        );
    }else return(
        <div></div>
    );
};

export default DishDetail;