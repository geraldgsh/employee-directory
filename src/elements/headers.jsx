import React from 'react';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';

export function HomeHeader() {
  return (
    <>
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
    </>
  );
}

export function EmployeeOverview() {
  return (
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
  );
}

export function Subordinate(props) {
  const { bosses } = props;
  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
    >
      {bosses !== undefined
        ? (
          <Typography variant="h6" gutterBottom>
            Subordinate of
            {' '}
            {bosses}
          </Typography>
        ) : null}
    </Grid>
  );
}

Subordinate.propTypes = {
  bosses: PropTypes.arrayOf(PropTypes.string).isRequired,
};
