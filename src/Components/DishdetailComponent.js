import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";
 

  function RenderDish({dish}) {

      const commentugal = dish.comments.map((commentoda) => {
        return (
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
        <div className="row m-3">
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
          <div className="row col-12 m-3 col-sm-6">
            <p>
              <h3>Comments</h3>
              <br></br>
              <ul className="list-unstyled">{commentugal}</ul>
            </p>
          </div>
        </div>
      );

  }
  const DishDetail = (props) => {
    if (props.dish != null) {
    // const dish = this.props.dish;
    return (
      <div className="container">
        <div className="row"><RenderDish dish={props.dish}/></div>;
      </div>
    );
  } else {
    return <div></div>;
  }
  }

export default DishDetail;
