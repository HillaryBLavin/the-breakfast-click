import React from 'react';
import { Card, CardImg, Col } from 'reactstrap';
import "./CharacterCard.css"

const CharacterCard = (props) => {
  return (
    <Col className="col-m-6">
      <Card onClick={() => props.handleClick(props)} className="p-1 m-3">
        <CardImg src={props.image} alt={props.name} />
      </Card>
    </Col>
  );
};

export default CharacterCard;