import React, { Component } from 'react';

class Calculator extends Component {

  state = {
    startingCount: null,
  }

  startingCountInputHandler = (event) => {
    this.setState(
      { startingCount: event.target.value }
    )
  }

  render() {
    return (
      <input
        type="integer"
        value={this.state.startingCount}
        onChange={this.startingCountInputHandler} />
    )
  }
}

export default Calculator;