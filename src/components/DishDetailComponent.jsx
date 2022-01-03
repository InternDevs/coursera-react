import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle, CardHeader, CardSubtitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from "react-router-dom";
import CommentForm from "./CommentForm";

const RenderDish = ({dish}) => {
    return (
        <div className="col-12 col-md-5 m-1">
            <Card>
                <CardImg top src={`../${dish.image}`} alt={dish.name} />
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


const RenderComments = ({comments}) => {
    if(comments !== null && comments.length > 0){
        const commentsJsx = comments.map(comment => {
            return(
                <li key={comment.id} id={`comment-id-${comment.id}`}>
                    <h5>{comment.comment}</h5>
                    <p>--{comment.author}, {new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                </li>
            );
        })

        return(
            <ul className="list-unstyled">
                {commentsJsx}
                <CommentForm />
            </ul>
        );
    }else{
        return(
            <div><CommentForm /></div>
        );
    }
}

const DishDetail = ({dish, comments}) => {
    if (dish != null){
        return(
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to={'/menu'}>Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{dish.name}</h3>
                    </div>
                </div>
                <div className="row mt-3 mb-3 pt-md-3 pb-md-3 pr-md-5 pl-md-5">
                        <RenderDish dish={dish}/>
                    <div className="col-12 col-md-5 m-1">
                        <h4 className="text-center">Comments</h4>
                        <RenderComments comments={comments}/>
                    </div>
                </div>
            </div>
        );
    }else return(
        <div></div>
    );
};

export default DishDetail;