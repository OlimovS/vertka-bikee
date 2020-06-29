import React from 'react';
import clsx from 'clsx';
import {  Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Nav from './Nav.js';
import boyBike from '../assets/images/boyBike.png';
import girlBike from '../assets/images/girlBike.png';

const useStyles = makeStyles(theme => ({
  bike: {
    width: '100%',
    height: '50vh',
    backgroundSize: 'cover',
    backgroundPosition: '50% 85%',
  },
  boy: {
    backgroundImage: `linear-gradient(to right bottom, rgba(29, 97, 156, 0.5), rgba(29, 156, 121, 0.5)), url(${boyBike})`,
  },
  girl: {
    backgroundImage: `linear-gradient(to right bottom, rgba(156, 29, 120, 0.5), rgba(226, 14, 217, 0.56)), url(${girlBike})`,
  },
  [theme.breakpoints.up('sm')]: {
    bike: {
      height: '100vh',
      backgroundPosition: '50% 70%',
    },

    wrapper: {
      display: 'flex',
    },
  },
  [theme.breakpoints.up('md')]: {
    bike: {
      height: '100vh',
      backgroundPosition: '50% 70%',
    },
    wrapper: {
      display: 'flex',
    },
  },
}));


function Header() {
  const classes = useStyles();

  return (
    <>
      <Nav />
      <div className={classes.wrapper}>
        <div className={clsx(classes.bike, classes.boy)}>
        </div>
        <div className={clsx(classes.bike, classes.girl)}>
        </div>
      </div>
    </>
  );
}

export default Header;
