import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  BreadcrumbItem,
  Breadcrumb,
} from "reactstrap";
import { Link } from "react-router-dom";

function RenderDish({ dish }) {
  return (
    <Card className="col-12 col-md-5 m-1 p-0">
      <CardImg width="100%" object src={dish.image} alt={dish.name} />
      <CardTitle className="px-3">
        <h4>{dish.name}</h4>
      </CardTitle>
      <CardBody>
        <CardText>
          <p>{dish.description}</p>
        </CardText>
      </CardBody>
    </Card>
  );
}

function RenderComments({ comments }) {
  
  if (comments != null) {
    const commentugal = comments.map((commentoda) => {
      return(
      <div key={commentoda.id}>
        <div>{commentoda.comment}</div>
        <div>
          &nbsp; --{commentoda.author}, &nbsp;
          {new Intl.DateTimeFormat("en-US", {
            year: "numeric",
            month: "short",
            day: "2-digit",
          }).format(new Date(Date.parse(commentoda.date)))}
        </div>
      </div>
      );
    });
    return (
      <div className="col-12 col-md-5 m-1">
        <h4>Comments</h4>
        <ul className="list-unstyled">{commentugal}</ul>
      </div>
    );
  } else {
    return <div></div>;
  }

}

const DishDetail = (props) => {
  if (props.dish != null) {
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/menu">Menu</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>{props.dish.name}</h3>
            <hr />
          </div>
        </div>
        <div className="row">
          <RenderDish dish={props.dish} />
          <RenderComments comments={props.comments} />
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default DishDetail;
