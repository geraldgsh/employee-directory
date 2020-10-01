/* eslint-disable consistent-return */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { Button, makeStyles } from '@material-ui/core';
import { green } from '@material-ui/core/colors';
import SearchIcon from '@material-ui/icons/Search';
import { arrayBegin, arraySuccess, arrayFailure } from '../actions/index';

export default function Search() {
  const [caseTitle, setCaseTitle] = useState();
  const dispatch = useDispatch();

  const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    button: {
      margin: theme.spacing(1),
      color: 'white',
      backgroundColor: green[500],
      '&:hover': {
        backgroundColor: green[700],
      },
      fontWeight: '700',
    },
  }));

  const visitChild = (node, array) => {
    // dispatch(arrayBegin);
    axios(`https://api.additivasia.io/api/v1/assignment/employees/${node}`)
      .then(response => {
        if (!response.data[1]) {
          return null;
        }
        const info = response.data[1]['direct-subordinates'];
        info.forEach(el => {
          if (!array.includes(el)) {
            array.push(el);
          }
        });
        if (info && info.length) {
          info.forEach(child => {
            visitChild(child, array);
          });
        }
        dispatch(arraySuccess(array));
      }).catch(error => {
        dispatch(arrayFailure(error.response.data.error));
      });
  };

  const traverseTree = (root, list = []) => {
    if (root.length) {
      root.forEach(node => {
        console.log(node);
        visitChild(node, list);
      });
    }
  };
  const classes = useStyles();
  return (
    <>
      <form className={classes.root} noValidate autoComplete="off">
        <Grid container justify="center">
          <div className={classes.bgColor}>
            <TextField
              id="standard-textarea"
              label="Employee Name"
              placeholder="John Hartman"
              multiline
              value={caseTitle}
              onChange={e => setCaseTitle(e.target.value)}
            />
          </div>
        </Grid>
        <Button
          variant="contained"
          size="large"
          className={classes.button}
          endIcon={<SearchIcon />}
          onClick={() => traverseTree([caseTitle])}
        >
          Send
        </Button>
      </form>
    </>
  );
}
