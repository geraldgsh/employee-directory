import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { HomeHeader } from '../elements/headers';
import Search from '../components/search';

const useStyles = makeStyles(() => ({
  root: {
    height: '100%',
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
      <HomeHeader />
      <Search />
    </Grid>
  );
}
