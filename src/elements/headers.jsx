import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

export default function HomeHeader() {
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
