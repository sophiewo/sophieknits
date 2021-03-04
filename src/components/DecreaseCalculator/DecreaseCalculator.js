import React, { Component } from 'react';
import { calculateDecrease } from './calculatorUtil';

class DecreaseCalculator extends Component {

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
    this.setState(
      { solution: calculateDecrease(this.state.startCount, this.state.endCount)}
    )
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
    this.setState(
      { endCount: event.target.value }
    )
  }

  render() {

    let result = ''
    if (this.state.showResult === true) {
      result = (
        <div> 
          <h2 data-testid="solution" > {this.state.solution} </h2>
        </div>
      )
    } 

    return (
      <div className="pa3 pa4-ns">
        <div className="measure">
          <label htmlFor="start" className="f3 b db mb2"> Starting Stitch Count </label>
          <input className="input-reset ba b--black-20 pa2 mb2 db w-100"
            type="text"
            data-testid="start-test"
            value={this.state.startCount}
            onChange={this.startCountHandler} />

        <br></br>

          <label htmlFor="end" className="f3 b db mb2"> End Stitch Count </label>
          <input className="input-reset ba b--black-20 pa2 mb2 db w-100"
            type="text"
            data-testid="end-test"
            value={this.state.endCount}
            onChange={this.endCountHandler} />
      
        <br></br>

        <button 
          className="f3 link dim ph3 pv2 mb2 dib white bg-black"
          onClick={this.handleClick} > Calculate Decrease
        </button>
        </div>
        <span>{result}</span>
        
      </div>
    )
  }
}

export default DecreaseCalculator;