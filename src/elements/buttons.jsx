import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    color: 'white',
    backgroundColor: red[500],
    '&:hover': {
      backgroundColor: red[700],
    },
    fontWeight: '700',
  },
}));

export default function GoBack() {
  const classes = useStyles();
  const history = useHistory();
  const goHome = () => {
    history.push('/');
  };

  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
    >
      <Button
        variant="contained"
        size="large"
        className={classes.button}
        to="/"
        onClick={goHome}
      >
        Back
      </Button>
    </Grid>
  );
}
