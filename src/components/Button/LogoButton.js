import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Grid from '@material-ui/core/Grid'

import images from './images'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    minWidth: 300,
    width: '100%',
  },
  image: {
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      }
    },
  },
  focusVisible: {},
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.2,
    transition: theme.transitions.create('opacity'),
  }
}));

export default function LogoButton() {

  const classes = useStyles();

  return (

    <div className={classes.root}>
      <Grid container xs={12} spacing={1}>
        {images.map(({ id, source, width, title }) => (
          <Grid item xs={4}>
            <ButtonBase
              key={id}
              className={classes.image}
              style={{ width: width }}
            >
              <img className={classes.image}
                src={process.env.PUBLIC_URL + source} alt={title} width="100%"
              />
              <span className={classes.imageBackdrop} />
            </ButtonBase>
          </Grid>
        ))}
      </Grid>
    </div>
  )
};