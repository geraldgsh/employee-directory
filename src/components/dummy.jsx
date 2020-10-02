import React from 'react';
import { makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { EmployeeOverview } from '../elements/headers';
import GoBack from '../elements/buttons';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
  },
  list: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  error: {
    color: 'red',
    backgroundColor: '#FFFFCB',
    height: '100%',
  },
}));

export default function Dummy() {
  const classes = useStyles();

  return (
    <Grid
      className={classes.root}
      container
      direction="column"
      justify="center"
      alignItems="center"
    >
      <EmployeeOverview />
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Typography variant="h6" gutterBottom>
          Subordinate of
        </Typography>
      </Grid>
      <GoBack />
    </Grid>
  );
}
