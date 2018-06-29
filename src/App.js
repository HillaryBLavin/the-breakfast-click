import React, { Component } from 'react';
import Header from "./components/Header";
import Title from "./components/Title";
import CardWrapper from "./components/CardWrapper";
import characters from "./characters.json"
import './App.css';
import CharacterCard from './components/CharacterCard';

class App extends Component {
    state = {
      guessArray: [],
      message: "Click a character to begin!",
      score: 0,
      topScore: 0
    };

    handleClick = card => {
      let guessArray = this.state.guessArray;
      let score = this.state.score;

      // If they click the same card more than once...
      if(guessArray[card.id]) { 
        // Set State - restart game
        this.setState({
          message: "You already chose them! Back to Start!",
          topScore: Math.max(this.state.score, this.state.topScore),
          guessArray: [],
          score: 0
        })
        // Otherwise...
      } else {
        guessArray[card.id] = true;
        this.setState({
          message: "Nice! Keep Clicking...",
          guessArray: guessArray,
          score: ++score
        })
      }
      if (score === 5) {
        this.setState({
          message: "You Won! Click a character to play again!",
          guessArray: [],
          score: 0
        })
      }
    
    };
  
  render() {
    return (
      <div>
        <Header 
          message={this.state.message}
          score={this.state.score}
          topScore={this.state.topScore}
        />
        <Title />
        <CardWrapper>
          {characters.sort((a,b) => 0.5 - Math.random()).map(randomCard => (
            <CharacterCard
              handleClick={this.handleClick}
              id={randomCard.id}
              key={randomCard.id}
              image={randomCard.image} />
          ))}
        </CardWrapper>
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
