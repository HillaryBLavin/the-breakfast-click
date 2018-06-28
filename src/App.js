import React, { Component } from 'react';
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Jumbotron from "./components/Jumbotron";
import Container from "./components/Container";
import './App.css';

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Header />
        <Jumbotron />
        <Container />
      </Wrapper>
    );
  }
}

export default App;
