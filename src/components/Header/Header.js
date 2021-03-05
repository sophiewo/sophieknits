import React from 'react'
// import NavBar from '../NavBar/NavBar'
import logo from '../../SophieKnits_FullBleed.png'
import Grid from '@material-ui/core/Grid'


const header = () => {

  return (
    // <article data-name="article-full-bleed-background">
    //   <div class="no-repeat center center fixed; background-size: cover" style={{ backgroundImage: `url(${background})` }}>
    //   <NavBar/>
    //   </div>
    // </article>

    <div>
      <Grid container xs={12} spacing={0}>
        <Grid item xs={2} />
        <Grid item xs={8} container >
          <Grid item xs={4}></Grid>
          <Grid item xs={4}>
            <img src={logo} width="97%" />
          </Grid>
          <Grid item xs={4}></Grid>
          <Grid item xs={2} />
        </Grid>
      </Grid>
    </div>
  )
};

export default header;

