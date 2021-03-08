import React from 'react'
import logo from '../../SophieKnits_FullBleed.png'
import Grid from '@material-ui/core/Grid'


const header = () => {

  return (

    <div>
      <Grid container xs={12} spacing={0}>
        <Grid item xs={2} />
        <Grid item xs={8} container >
          <Grid item xs={4}></Grid>
          <Grid item xs={4}>
            <img src={logo} width="97%" alt="logo" />
          </Grid>
          <Grid item xs={4}></Grid>
          <Grid item xs={2} />
        </Grid>
      </Grid>
    </div>
  )
};

export default header;

