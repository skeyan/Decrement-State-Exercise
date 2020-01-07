/*
  Eva Yan
  January 7 2020
  CUNY 2X/TTP BOOTCAMP
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';


class DecrementComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {number: props.number}; //key-value pair, props is the default object that has the number
  }
  decreaseNumber = () => {
    let n = this.state.number;
    if(n > 0) {
        let result = n - 1;
        this.setState({number: result});
    } else {
      alert("Cannot be less than zero (0)!");
    }
  }
  increaseNumber = () => {
    let n = this.state.number;
    let result = n + 1;
    this.setState({number: result});
  }
  render() {
    return(
      <div> 
        <div className="button-container">
          <p id="react">React</p>
          <h1>Decrement/Increment</h1>
          <p>Click to increase or decrease the number on the screen.</p>
          <p className="number">{this.state.number}</p>
          <button onClick={this.decreaseNumber}>
            <p>Decrement (-)</p>
          </button>
          <button onClick={this.increaseNumber}>
            <p>Increment (+)</p>
          </button>
        </div>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <DecrementComponent number={0} />
    );
  }
}


export default App;
