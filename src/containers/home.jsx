import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Search from '../components/search';

const useStyles = makeStyles(() => ({
  root: {
    height: '100%',
    backgroundColor: '#FFFFCB',
  },
}));

export default function Home() {
  const classes = useStyles();
  return (
    <Grid
      className={classes.root}
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
        <Typography variant="h4" gutterBottom>
          Employee Explorer
        </Typography>
      </Grid>
      <Search />
    </Grid>
  );
}
