import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import GoBack from './buttons';

const useStyles = makeStyles(() => ({
  error: {
    color: 'red',
    height: '100%',
  },
}));

export default function NoResult() {
  const classes = useStyles();
  return (
    <Grid
      className={classes.error}
      container
      direction="column"
      justify="center"
      alignItems="center"
    >
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Typography variant="h3" gutterBottom>
          No Results
        </Typography>
        <GoBack />
      </Grid>
    </Grid>
  );
}
