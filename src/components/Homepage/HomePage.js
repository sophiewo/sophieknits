import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Image, CloudinaryContext } from 'cloudinary-react';
import LogoButton from '../Button/LogoButton'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 3,
  }

}));


export default function HomePage() {
  const classes = useStyles();

  return (

    <div className={classes.root}>

      <Grid container xs={12} spacing={0}>
        <Grid item xs={2} />
        <Grid item xs={8} container >
            <LogoButton />
          <Grid item xs={2} />
        </Grid>
      </Grid>
    </div>

  );
}
