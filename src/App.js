import React, { Component } from 'react';
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Score from "./components/Score";
import Jumbotron from "./components/Jumbotron";
import Container from "./components/Wrapper";
import './App.css';

class App extends Component {
  render() {
    return (
      <Wrapper>
        {/* <Header>
          <Score></Score>
        </Header>
        <Jumbotron></Jumbotron>
        <Container>
          <Card>
          </Card>
        </Container> */}
      </Wrapper>
    );
  }
}

export default App;
