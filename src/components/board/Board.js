import React, { Component } from 'react';
import './Board.css';
import Message from '../../components/Message'

class Board extends Component {

  constructor() {
    super();     
  }

  handleClick = id => {
    var x;
    var y;
    var value;

    // buscar en tokens
    for (var i = 0; i < this.props.tokens.length; i++) {

      for (var j = 0; j < this.props.tokens[i].length; j++) {
        if (id == this.props.tokens[i][j].id) {
          x = i;
          y = j;
          value = this.props.tokens[i][j].value;
        }
      }

    }

    //top
    if (x > 0 && this.props.tokens[x - 1][y].value == 16) {
      this.props.tokens[x][y].value = 16;
      this.props.tokens[x - 1][y].value = value;
    }
    //left
    if (y > 0 && this.props.tokens[x][y - 1].value == 16) {
      this.props.tokens[x][y].value = 16;
      this.props.tokens[x][y - 1].value = value;
    }
    //right
    if (y < 3 && this.props.tokens[x][y + 1].value == 16) {
      console.log("right")
      this.props.tokens[x][y].value = 16;
      this.props.tokens[x][y + 1].value = value;
    }
    //botton
    if (x < 3 && this.props.tokens[x + 1][y].value == 16) {
      this.props.tokens[x][y].value = 16;
      this.props.tokens[x + 1][y].value = value;
    }
    this.setState({ ["tokens"]: this.props.tokens })
  }

  validate = gameState => { 
    for(var i = 0 ; i < gameState.length; i++){
      for(var j = 0 ; j < gameState[i].length; j++){
        if((gameState[i])[j].id != (gameState[i])[j].value){
          return false;  
        }  
      }
    }
    return true;
  } 

  render() {
  
    return (
      <div className="board" id="board">

        { this.validate(this.props.tokens) &&
          <Message />
        }
        {
          this.props.tokens.map((rowNumber) => (
            rowNumber.map((col) => (
              <div id={col.id} key={col.id} onClick={(e) => this.handleClick(col.id)}
                className={(col.value == 16 ? 'emphyToken' : 'token')}> {col.value} </div>
            ))
          ))
        }
      </div>
    )
  }

}

export default Board;
