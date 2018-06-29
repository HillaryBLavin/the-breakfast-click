import React from 'react';
import { Container } from 'reactstrap';
import CharacterCard from '../CharacterCard';

const CardWrapper = props =>
  <Container>
    <div className="character-div">
      <CharacterCard />
    </div>
  </Container>

  export default CardWrapper;