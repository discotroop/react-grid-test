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
  }
    // this.state = {
    //   // fun stuff
    // }    
  buildDivs() {
    for (i = 0; i < 64; i++) {
      
    }
  }

  render() {
    return <div className="board"> hi </div>
  }
}

export default App;
