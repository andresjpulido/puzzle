import React, { Component } from 'react';
import './Board.css';

class Board extends Component {

  constructor(){
    super();
    this.state = {
        tokens : getTokens()
    }
      
  }

  handleClick= id =>{
    var x;
    var y;
    var value;

    // buscar en tokens
    for(var i=0; i<this.state.tokens.length; i++){
      
      for(var j=0; j<this.state.tokens[i].length; j++){
        if(id == this.state.tokens[i][j].id){
          x = i;
          y = j;
          value = this.state.tokens[i][j].value;
        }
      }
      
    }
    
    //top
    if(x>0 && this.state.tokens[x-1][y].value == 16){
      this.state.tokens[x][y].value = 16;
      this.state.tokens[x-1][y].value = value;
    }
    //left
    if(y>0 && this.state.tokens[x][y-1].value == 16){
      this.state.tokens[x][y].value = 16;
      this.state.tokens[x][y-1].value = value;
    }
    //right
    if(y<3 && this.state.tokens[x][y+1].value == 16){
      console.log("right")
      this.state.tokens[x][y].value = 16;
      this.state.tokens[x][y+1].value = value;
    }
    //botton
    if(x<3 && this.state.tokens[x+1][y].value == 16){
      this.state.tokens[x][y].value = 16;
      this.state.tokens[x+1][y].value = value;
    }
    this.setState({["tokens"]:this.state.tokens})
  }

  
  render(){

    return (
      <div className="board" id="board">
      {
        this.state.tokens.map((rowNumber) => (
          rowNumber.map((col)=>(
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

function getTokens(){
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
