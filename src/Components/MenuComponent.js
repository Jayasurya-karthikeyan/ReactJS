import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";

class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedDish: null,
    };
  }

  onDishSelect(dish) {
    this.setState({ selectedDish: dish });
  }

  renderDish(dish) {
    if (dish != null) {
      const commentugal = dish.comments.map((commentoda) => {
        return (
          <div key={commentoda.id}>
            <div>{commentoda.comment}</div>
            <div>
              {" "}
              --{commentoda.author}, {commentoda.date}
            </div>
          </div>
        );
      });

      return (
        <div className="row m-3">
          <Card className="col-12 col-md-5 m-1 p-0">
            <CardImg width="100%" object src={dish.image} alt={dish.name} />
            <CardTitle className="px-3" heading>
              <h4>{dish.name}</h4>
            </CardTitle>
            <CardBody>
              <CardText>{dish.description}</CardText>
            </CardBody>
          </Card>
          <div className="row col-12 m-3 col-sm-6">
            <h3>Comments</h3>
            <h6>{commentugal}</h6>
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  }

  render() {
    const menu = this.props.dishes.map((dish) => {
      return (
        <div key={dish.id} className="col-12 col-md-5 m-3 ">
          <Card onClick={() => this.onDishSelect(dish)}>
            <CardImg width="100%" object src={dish.image} alt={dish.name} />
            <CardImgOverlay body className="ml-5">
              <CardTitle heading>{dish.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      );
    });

    return (
      <div className="container">
        <div className="row">{menu}</div>
        <div className="row">{this.renderDish(this.state.selectedDish)}</div>
      </div>
    );
  }
}

export default Menu;
