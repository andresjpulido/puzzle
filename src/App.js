import React, { Component } from 'react';
import './App.css';

import Board from './components/board/Board';

class App extends Component {
  render() {
    return (
      <div>
        <div className="App-header">
          <h1 className="App-title">Welcome to Puzzle</h1>
          <p>Put in order the numbers using the blank space to move the tokens.</p>
        </div>
        <br />
        <Board></Board>
      </div>
    );
  }
}

export default App;
