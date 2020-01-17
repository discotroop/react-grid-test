import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Board />
    </div>
  );
}

class Board extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
    // this.state = {
    //   // fun stuff
    // }    
  square(props) {
    return <div className="box"> {props} </div>
  }

  buildSquares(props) {
    let gameGrid = [];

    for (let i = 0; i < props; i++) {
      gameGrid.push(this.square(i));
    }
    return gameGrid;
  }

  render() {
    return <div className="board">
      {this.buildSquares(64)}
     </div>
  }
}


export default App;
