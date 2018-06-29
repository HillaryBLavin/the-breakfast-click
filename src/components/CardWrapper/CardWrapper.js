import React from 'react';
import { Container, Row } from 'reactstrap';

const CardWrapper = props =>
  <Container>
    <Row className="d-flex justify-content-center">
    {props.children}
    </Row>
  </Container>

  export default CardWrapper;