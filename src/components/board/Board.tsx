import React, { Component } from 'react';
import './Board.css';
import Message from '../Message'

type BoardStatus = {
  tokens: Array<Array<Token>>
}

type Token = {
  id: number,
  value: number
}

class Board extends Component<BoardStatus>{
  
  // eslint-disable-next-line
  constructor(props: BoardStatus) {
    super(props)
  }

  //This method handles the click on any token and decide if it can move to the blank space.
  handleClick = (id: number) => {
    let x: number = 0;
    let y: number = 0;
    let value: number = 0;

    //
    for (var i = 0; i < this.props.tokens.length; i++) {

      for (var j = 0; j < this.props.tokens[i].length; j++) {
        if (id === this.props.tokens[i][j].id) {
          x = i;
          y = j;
          value = this.props.tokens[i][j].value;
        }
      }

    }

    //top
    if (x > 0 && this.props.tokens[x - 1][y].value === 16) {
      this.props.tokens[x][y].value = 16;
      this.props.tokens[x - 1][y].value = value;
    }

    //left
    if (y > 0 && this.props.tokens[x][y - 1].value === 16) {
      this.props.tokens[x][y].value = 16;
      this.props.tokens[x][y - 1].value = value;
    }

    //right
    if (y < 3 && this.props.tokens[x][y + 1].value === 16) {
      this.props.tokens[x][y].value = 16;
      this.props.tokens[x][y + 1].value = value;
    }

    //botton
    if (x < 3 && this.props.tokens[x + 1][y].value === 16) {
      this.props.tokens[x][y].value = 16;
      this.props.tokens[x + 1][y].value = value;
    }
  }

  //This method validates if the user orders all tokends in the board
  validate = (gameState: Array<any>) => {
    for (var i = 0; i < gameState.length; i++) {
      for (var j = 0; j < gameState[i].length; j++) {
        if ((gameState[i])[j].id !== (gameState[i])[j].value) {
          return false;
        }
      }
    }
    return true;
  }

  render() {

    return (
      <div className="board non-selectable" id="board">

        { this.validate(this.props.tokens) &&
          <Message />
        }
        {
          this.props.tokens.map((rowNumber) => (
            rowNumber.map((col: Token) => (
              <div id={col.id.toString()} key={col.id} onClick={(e) => this.handleClick(col.id)}
                className={(col.value === 16 ? 'emphyToken' : 'token')}> {col.value} </div>
            ))
          ))
        }
      </div>
    )
  }

}

export default Board;