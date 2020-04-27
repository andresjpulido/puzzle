import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';
import Board from './components/board/Board';


class App extends Component {

  constructor(){
    super();
    this.state = {
        tokens : getTokens()
    }
  }

  updateTokens = () => {
    this.setState({tokens : getTokens()});     
  }

  render() {
     
    console.log("invoke render ...")
    return (
      <div>
        <div className="App-header">
          <h1 className="App-title">Welcome to Puzzle</h1>
          <p>Put in order the numbers using the blank space to move the tokens.</p>
        </div>
        <br />
        <Board tokens={this.state.tokens}></Board>
        <button onClick={(e) => this.updateTokens()}>New</button>
        
      </div>
    );
  }
}

export default App;

function getTokens(){
  console.log("invoke getTokens ...")
  var list = getRamdomValuesArray();
  var tokens = [
    [{"id":1,"value":list[0]}, {"id":2,"value":list[1]}, {"id":3,"value":list[2]}, {"id":4,"value":list[3]}],
    [{"id":5,"value":list[4]},{"id":6,"value":list[5]},{"id":7,"value":list[6]},{"id":8,"value":list[7]}],
    [{"id":9,"value":list[8]},{"id":10,"value":list[9]},{"id":11,"value":list[10]},{"id":12,"value":list[11]}],
    [{"id":13,"value":list[12]},{"id":14,"value":list[13]},{"id":15,"value":list[14]},{"id":16,"value":list[15]}]
  ];
  return tokens;
}

function getRamdomValuesArray(){
  var list = [];
  var ramdomNumber;
  for(var i=0; i<16; i++){
    ramdomNumber = Math.floor((Math.random() * 16) + 1);
    while(inList(ramdomNumber, list)){
      ramdomNumber = Math.floor((Math.random() * 16) + 1);
    }
    list.push(ramdomNumber)
  }
  return list;
}

function inList(number, list){
  for(var i=0; i<list.length; i++){
    if(list[i] == number){
      return true;
    }
  }
}


