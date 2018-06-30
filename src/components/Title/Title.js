import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import './Title.css'

const Title = (props) => {
  return (
    <div>
      <Jumbotron fluid className="jumbo">
        <Container fluid>
          <h1 className="display-3 text-center">The Breakfast Click</h1>
          <p className="lead text-center">Click on each delinquent teenager once to win the game! If you click on anyone twice, it's back to start.</p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Title;