import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles, List } from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Loader from '../elements/loader';
import NoResult from '../elements/message';
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

export default function Result() {
  const classes = useStyles();

  const { loading, arrays, error } = useSelector(
    state => ({
      loading: state.arrays.loading,
      arrays: state.arrays.arrays,
      error: state.arrays.error,
    }),
  );

  if (error) {
    return (
      <h3 className={classes.error}>{error}</h3>
    );
  }
  if (arrays && arrays.length === 0) {
    return (
      <NoResult />
    );
  }
  if (loading === true) {
    return (
      <Loader />
    );
  }

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
          Employee Overview
        </Typography>
      </Grid>
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
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid item>
          <List component="nav" className={classes.list} aria-label="contacts">
            {arrays ? arrays
              .map(array => {
                const labelId = `list-secondary-label-${array}`;
                return (
                  <ListItem key={array.id}>
                    <ListItemText id={labelId} primary={array} />
                  </ListItem>
                );
              }) : null }
          </List>
        </Grid>
      </Grid>
      <GoBack />
    </Grid>
  );
}
