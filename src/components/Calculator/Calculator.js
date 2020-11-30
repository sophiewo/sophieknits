import React, { Component } from 'react';

class Calculator extends Component {

  constructor(props) {
    super(props);
    this.state = {
      startCount: "",
      endCount: "",
      showResult: false,
      solution: 0
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState( {
      showResult: true }
    )
    this.stitchParser()
    this.calculateDecrease()
    
  }

  stitchParser = () => {
    let startCount = parseInt(this.state.startCount)
    let endCount = parseInt(this.state.endCount)
    this.setState(
      { startCount: startCount, endCount: endCount }
    )
  }

  startCountHandler = (event) => {
    this.setState(
      { startCount: event.target.value }
    )
  }

 endCountHandler = (event) => {
   let endCount = parseInt(event.target.value)
    this.setState(
      { endCount: endCount }
    )
  }

  calculateDecrease = () => {

    let start = this.state.startCount
    let end = this.state.endCount
    let decrease = ( start - end )
  console.log(start % decrease)
    if ( start % decrease === 0 ) {
      let result = " K2TOG * " + (decrease) 
      this.setState(
        { solution: result}
      )
    }
  }

  render() {

    let result = ''
    if (this.state.showResult === true) {
      result = (
        <div> 
          <p> Start at {this.state.startCount} stitches, decrease to {this.state.endCount} stitches? </p>
          <h2> {this.state.solution} </h2>
        </div>
      )
    }

    return (
      <div>
        <h1> Stitch Decrease Calculator </h1>
        <label>
          Starting Stich Count:
          <input
            type="text"
            value={this.state.startCount}
            onChange={this.startCountHandler} />
        </label>

        <label>
          End Stich Count:
          <input
            type="text"
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