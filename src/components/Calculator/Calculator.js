import React, { Component } from 'react';

class Calculator extends Component {

  constructor(props) {
    super(props);
    this.state = {
      startCount: null,
      endCount: null,
      showResult: false
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      showResult: !state.showResult
    }));
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

  render() {

    let result = ''
    if (this.state.showResult === true) {

      result = (
        <div> 
          <p> Start at {this.state.startCount} stitches, decrease to {this.state.endCount} stitches? </p>
        </div>
      )
    }

    return (
      <div>
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
        <button onClick={this.handleClick}>
          Calculate Decrease
        </button>
        {result}
      </div>

    )
  }
}

export default Calculator;