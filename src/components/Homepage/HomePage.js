import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import logo from '../../sophieknits-hm.png';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  }

}));

export default function HomePage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container xs={12} spacing={1}>
        <Grid item xs>
          <a
            href="/"
            title="Home">
            <img src={logo} center alt='SophieKnits_' />
          </a>
        </Grid>

            <Grid item xs={12}>
              <a
                href="/"
                title="Home">
                <img src={logo} center alt='SophieKnits_' />
              </a>
            </Grid>

        <Grid item xs={6}>
          <a
            href="/"
            title="Home">
            <img src={logo} center alt='SophieKnits_' />
          </a>
        </Grid>

            </Grid>
            </div>



    //     <Grid item xs={6}>
    //       <Paper className={classes.paper}>xs=6</Paper>
    //     </Grid>
    //     <Grid item xs={6}>
    //       <Paper className={classes.paper}>xs=6</Paper>
    //     </Grid>
    //     <Grid item xs={3}>
    //       <Paper className={classes.paper}>xs=3</Paper>
    //     </Grid>
    //     <Grid item xs={3}>
    //       <Paper className={classes.paper}>xs=3</Paper>
    //     </Grid>
    //     <Grid item xs={3}>
    //       <Paper className={classes.paper}>xs=3</Paper>
    //     </Grid>
    //     <Grid item xs={3}>
    //       <Paper className={classes.paper}>xs=3</Paper>
    //     </Grid>
    //   </Grid>
    // </div>
  );
}
