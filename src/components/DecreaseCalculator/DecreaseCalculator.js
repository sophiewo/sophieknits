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
    // 20 - 5
    let start = this.state.startCount
    let end = this.state.endCount
    let decrease = start - end // 15
    let remainder = start % decrease // 5
    let totalSegments = Math.floor(start / decrease)  // 1
    let repeat1 = decrease - remainder
    let stitches1 = totalSegments - 2
    let repeat2 = remainder
    let stitches2 = totalSegments - 1

    console.log(decrease)
    console.log(remainder)
    console.log(totalSegments)
    console.log(repeat1)
    console.log(stitches1)
    console.log(repeat2)
    console.log(stitches2)


   let solution = (`[ k${stitches1}, k2tog ] repeat x ${repeat1}times, [ k${stitches2}, k2tog] repeat x ${repeat2}times`)

    // if ( start % decrease === 0 ) {
    //   result = "K2TOG * " + (decrease)
    // } else { 
  
    this.setState(
      { solution: solution }
    )
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

export default DecreaseCalculator;