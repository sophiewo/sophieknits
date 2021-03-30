import React, { Component } from 'react';
import { calculateDecrease } from './calculatorUtil';
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Collapse from '@material-ui/core/Collapse';
import clsx from 'clsx';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';



import { withStyles } from "@material-ui/core/styles";
import { CardActions } from '@material-ui/core';

const styles = theme => ({
  root: {
      width: '50ch',
    },
  textf: {
    margin: "10px",
    botton: "10px",
    width: '25ch'
  },
  expand: {
    transform: 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(0deg)',
  },

});

class DecreaseCalculator extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchNodes: "",
      startCount: "",
      endCount: "",
      showResult: false,
      solution: 0
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      showResult: true
    }
    )
    this.stitchParser()
    this.setState(
      { solution: calculateDecrease(this.state.startCount, this.state.endCount) }
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

    const { classes } = this.props;

    let result = ''
    if (this.state.showResult === true) {
      result = (
        <div>
          <p data-testid="solution" > {this.state.solution} </p>
        </div>
      )
    }

    return (
      <div className={classes.root}>
        <Card >
          <CardHeader
            title="Decrease Calculator"
            subheader="Enter stitches"
          />

          <CardContent >

            <TextField className={classes.textf}
              data-testid="start-test"
              value={this.state.startCount}
              onChange={this.startCountHandler}
              id="filled-number"
              label="Starting Stitch Count"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              variant="filled"
            />

            <TextField className={classes.textf}
              type="number"
              data-testid="end-test"
              value={this.state.endCount}
              onChange={this.endCountHandler}
              id="filled-number"
              label="End Stitch Count"
              InputLabelProps={{
                shrink: true,
              }}
              variant="filled"
            />

<CardActions>
            <Button 
            variant="outlined"
            onClick={this.handleClick}
            aria-expanded={this.state.showResult}
            aria-label="show more"

>
                Calculate Decrease <ExpandMoreIcon className={clsx(classes.expand, {
              [classes.expandOpen]: this.state.showResult,
            })} />

            </Button>
            </CardActions>  
            <Collapse in={this.state.showResult} unmountOnExit>
            
            {result}
            </Collapse>
          </CardContent>

        </Card>
      </div>
    )
  }
}

export default withStyles(styles, { withTheme: true })(DecreaseCalculator);