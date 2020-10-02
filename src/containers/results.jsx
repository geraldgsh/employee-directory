import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Loader from '../elements/loader';
import { NoResult, ErrorMsg } from '../elements/message';
import GoBack from '../elements/buttons';
import { EmployeeOverview, Subordinate } from '../elements/headers';
import ResultList from '../components/resultList';

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
  errorText: {
    marginTop: '15%',
  },
}));

export default function Results() {
  const classes = useStyles();

  const {
    loading,
    arrays,
    error,
    bosses,
  } = useSelector(
    state => ({
      loading: state.arrays.loading,
      arrays: state.arrays.arrays,
      error: state.arrays.error,
      bosses: state.bosses.bosses,
    }),
  );

  if (error) {
    return (
      <ErrorMsg />
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
      <EmployeeOverview />
      <Subordinate bosses={bosses} />
      <ResultList />
      <GoBack />
    </Grid>
  );
}
