import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";
import { Loading } from "./LoadingComponent";
import { baseUrl } from "../shared/baseUrl";
import { FadeTransform } from 'react-animation-components';

function RenderCard({ item, isLoading, errMess }) {
  if (isLoading) {
    return <Loading />;
  }
  if (isLoading) {
    return <h4>{errMess}</h4>;
  }
  return (
    <FadeTransform
    in
    transformProps={{
        exitTransform: 'scale(0.5) translateY(-50%)'
    }}>
    <Card className="my-4">
      <CardImg src={baseUrl + item.image} alt={item.name} />
      <CardBody>
        <CardTitle><h4>{item.name}</h4></CardTitle>
        {item.designation ? (
          <CardSubtitle>{item.designation}</CardSubtitle>
        ) : null}
        <CardText>{item.description}</CardText>
      </CardBody>
      {console.log("1 completed")}
    </Card>
    </FadeTransform>
  );
}

function Home(props) {
  return (
    <div className="container">
      <div className="row align-items-start">
        <div className="col-12 col-md m-1">
          <RenderCard
            item={props.dish}
            isLoading={props.dishesLoading}
            errMess={props.dishesErrMess}
          />
          {console.log("dishes completed")}
        </div>
        <div className="col-12 col-md m-1">
          <RenderCard
            item={props.promotion}
            isLoading={props.promoLoading}
            errMess={props.promoErrMess}
          />
          {console.log("promos completed")}
        </div>
        <div className="col-12 col-md m-1">
          <RenderCard
           item={props.leader}
           isLoading={props.leaderLoading}
           errMess={props.leaderErrMess} />
          {console.log("leaders completed")}
        </div>
      </div>
    </div>
  );
}

export default Home;
