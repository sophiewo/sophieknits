import React, { Component } from 'react';

class Calculator extends Component {

  state = {
    startCount: null,
    endCount: null
  }

  startCountHandler = (event) => {
    this.setState(
      { startCount: event.target.value }
    )
  }

 endCountHandler = (event) => {
    this.setState(
      { endCount: event.target.value }
    )
  }

  submitHandler = () => {
    alert ("Start at " + this.state.startCount + " stitches, decrease to " + this.state.endCount + " stitches?")
  }

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <label>
          Starting Stich Count:
          <input
            type="integer"
            value={this.state.startCount}
            onChange={this.startCountHandler} />
        </label>

        <label>
          End Stich Count:
          <input
            type="integer"
            value={this.state.endCount}
            onChange={this.endCountHandler} />
        </label>
        <input type="submit" value="Calculate Decrease" />
      </form>

      
    )
  }
}

export default Calculator;