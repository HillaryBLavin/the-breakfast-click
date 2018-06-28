import React, { Component } from 'react';
import Header from "./components/Header";
import Title from "./components/Title";
import CardWrapper from "./components/CardWrapper";
import characters from "./characters.json"
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      characters: characters
    };
  }
  render() {
    return (
      <div>
        <Header />
        <Title />
        <CardWrapper 
          characters={this.state.characters}
          handleClick={this.handleClick}
        />
      </div>
    );
  }
}

export default App;
