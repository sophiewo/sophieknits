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
    // this.onChange = this.onChange.bind(this)
  }

  handleClick() {
    this.setState( {
      showResult: true }
    )
    this.calculateDecrease()
    
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

  calculateDecrease = () => {
    let a = parseInt(this.state.startCount)
    let b = parseInt(this.state.endCount)
    this.setState({solution: a + b } )
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