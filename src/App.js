import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="boards">
        <div> Player 1 
          <Board />
        </div>
        <div> Player 2 (ai)
          <Board />
        </div>
      </div>
    </div>
  );
}

class Board extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  square(Xcoord, Ycoord) {
    return <div className="square" key={[Xcoord, Ycoord]}> {Xcoord} {Ycoord} </div>
  }

  buildSquares(props) {
    let gameGrid = [];

    for (let i = 0; i < props; i++) {
      for (let j = 0; j < props; j++) {
        gameGrid.push(this.square(i, j));
      }
    }
    return gameGrid;
  }

  render() {
    return <div className="board">
      {this.buildSquares(8)}
     </div>
  }
}


export default App;
