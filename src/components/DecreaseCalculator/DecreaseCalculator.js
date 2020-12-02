import React, { Component } from 'react';

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
    let decrease = start - end // 15
    let remainder = start % decrease // 5
    let totalSegments = Math.floor(start / decrease)  // 1
    let repeat1 = decrease - remainder
    let stitches1 = totalSegments - 2
    let repeat2 = remainder
    let stitches2 = totalSegments - 1
    let solution = ''

    if ( end === start / 2 ) {
        solution = `[ k2tog ] x ${decrease}times`  
    } else if (repeat1 === 1 && repeat2 > 1) {
        solution = (`[ k${stitches1}, k2tog ], [ k${stitches2}, k2tog ] x ${repeat2}times`)
    } else if (repeat1 === 0 && repeat2 > 1) {
      solution = (`[ k${stitches2}, k2tog ] x ${repeat2}times`)
    } else if (repeat1 > 1 && repeat2 === 0) {
      solution = (`[ k${stitches1}, k2tog ] x ${repeat1}times`)
    } else if (repeat1 > 1 && repeat2 === 1) {
        solution = (`[ k${stitches1}, k2tog ] x ${repeat1}times, [ k${stitches2}, k2tog ]`)
    } else if (stitches1 === 0) {
        solution = (`[ k2tog ] x ${repeat1}times, [ k${stitches2}, k2tog ]`)
    } else if (stitches2 === 0) {
      solution = (`[ k${stitches1}, k2tog ] x ${repeat1}times, [ k2tog ] x ${repeat2}times`)
    } else {
      solution = (`[ k${stitches1}, k2tog ] x ${repeat1}times, [ k${stitches2}, k2tog ] x ${repeat2}times`)
}

  
    this.setState(
      { solution: solution }
    )
  }

  render() {

    let result = ''
    if (this.state.showResult === true) {
      result = (
        <div> 
          {/* <p> Start at {this.state.startCount} stitches, decrease to {this.state.endCount} stitches? </p> */}
          <h2 data-testid="solution" > {this.state.solution} </h2>
        </div>
      )
    }

    return (
      <div>
        <h1 class="f-subheadline lh-title"> Stitch Decrease Calculator </h1>
        <label>
          Starting Stich Count:
          <input
            type="text"
            data-testid="start-test"
            value={this.state.startCount}
            onChange={this.startCountHandler} />
        </label>
        <br></br>
        <label>
          End Stich Count:
          <input
            type="text"
            data-testid="end-test"
            value={this.state.endCount}
            onChange={this.endCountHandler} />
        </label>
        <br></br>
        <button onClick={this.handleClick}>
          Calculate Decrease
        </button>
        <span>{result}</span>
        
      </div>
    )
  }
}

export default DecreaseCalculator;