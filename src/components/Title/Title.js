import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import './Title.css'

const Title = (props) => {
  return (
    <div>
      <Jumbotron fluid className="jumbo">
        <Container fluid>
          <h1 className="display-3 text-center">The Breakfast Click</h1>
          <p className="lead text-center">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Title;