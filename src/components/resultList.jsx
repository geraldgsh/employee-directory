import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles, List } from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  list: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ResultList() {
  const classes = useStyles();

  const {
    arrays,
  } = useSelector(
    state => ({
      arrays: state.arrays.arrays,
    }),
  );

  return (
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
                <ListItem key={array}>
                  <ListItemText id={labelId} primary={array} />
                </ListItem>
              );
            }) : null }
        </List>
      </Grid>
    </Grid>
  );
}
