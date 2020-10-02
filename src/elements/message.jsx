import React from 'react';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import GoBack from './buttons';

const useStyles = makeStyles(() => ({
  error: {
    color: 'red',
    height: '100%',
  },
}));

export function NoResult() {
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

export function ErrorMsg(props) {
  const classes = useStyles();
  const { error } = props;
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
          {error}
        </Typography>
        <GoBack />
      </Grid>
    </Grid>
  );
}

ErrorMsg.propTypes = {
  error: PropTypes.string.isRequired,
};
