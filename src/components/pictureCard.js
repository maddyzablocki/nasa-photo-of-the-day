import React from "react";
import { Card, CardBody, CardImg } from "reactstrap";
import {MyCardTitle} from "./styles";
import {MyText} from "./styles";


const PictureCard = props => {
    return (
      <div>
        <Card color="dark">
          <CardBody>
            <MyCardTitle color="primary">{props.title}</MyCardTitle>
            <h2> {props.date} </h2>
            <CardImg
            top
            width="100%"
            src={props.url}
            alt="NASA Image Of The Day"
            style={{ maxWidth: "500px" }}
          />
          <MyText> {props.explanation} </MyText>
          </CardBody>
        </Card>
      </div>
    );
  };

  export default PictureCard;
