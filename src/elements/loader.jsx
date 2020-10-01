import React from 'react';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: '150px',
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}));

export default function Loader() {
  const classes = useStyles();

  return (
    <Grid
      className={classes.error}
      container
      direction="column"
      justify="center"
      alignItems="center"
    >
      <div className={classes.root}>
        <CircularProgress size={100} color="primary" />
      </div>
    </Grid>
  );
}
