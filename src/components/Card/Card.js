import React from 'react';
import DecreaseCalculator from '../DecreaseCalculator/DecreaseCalculator'
import Card from '@material-ui/core/Card'
import Grid from '@material-ui/core/Grid'

const ToolCard = (props) => {
  return (
    <Grid container xs={12} spacing={1}>
      <Grid item xs={6} md={6} lg={4}/>
      <Grid item xs={6} md={6} lg={4}>
        <Card >
          <h1> {props.title} </h1>
          <div>
            <p>
              <DecreaseCalculator />
            </p>
          </div>
        </Card>
      </Grid>
    </Grid>
  )
}

export default ToolCard;