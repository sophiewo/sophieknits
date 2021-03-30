import React from 'react';
import DecreaseCalculator from '../DecreaseCalculator/DecreaseCalculator'
import Grid from '@material-ui/core/Grid'

const ToolCard = (props) => {
  return (
    <Grid container xs={12} spacing={1}>
      <Grid item xs={6} md={6} lg={4}/>
      <Grid item xs={6} md={6} lg={4}>
        
              <DecreaseCalculator />
      </Grid>
    </Grid>
  )
}

export default ToolCard;