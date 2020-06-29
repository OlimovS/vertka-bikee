import React from 'react';
import clsx from 'clsx';
import {  Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';

import Nav from './Nav.js';
import boyBike from '../assets/images/boyBike.png';
import girlBike from '../assets/images/girlBike.png';

const useStyles = makeStyles(theme => ({
  bike: {
    width: '100%',
    height: '50vh',
    backgroundSize: 'cover',
    backgroundPosition: '50% 85%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& div': {
      textAlign: 'center',
      paddingTop: theme.spacing(4),
    },
  },
  boy: {
    backgroundImage: `linear-gradient(to right bottom, rgba(29, 97, 156, 0.6), rgba(29, 156, 121, 0.5)), url(${boyBike})`,
  },
  girl: {
    backgroundImage: `linear-gradient(to bottom, rgba(156, 29, 120, 0.5), rgba(226, 14, 217, 0.4)), url(${girlBike})`,
  },

  headText: {
    color: '#ffffff',
    fontFamily: 'HighTide,OpenSans-CondensedLight,AdobeInvisFont,MyriadPro-Regular'
  },
  btnColor: {
    color: grey[50],
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
  },
  gutterBottom: {
    marginBottom: '18px',
  },
  ['@media(min-width: 750px)']: {
      bike: {
        height: '100vh',
        backgroundPosition: '50% 70%',
      },
      wrapper: {
        display: 'flex',
      },
  },
  ['@media(min-width: 500px)']: {
      bike: {
        height: '100vh',
        backgroundPosition: '50% 70%',
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
          <div>
          <Typography className={classes.headText} variant='h2'>Fixies</Typography>
          <Typography className={classes.headText} classes={{gutterBottom: classes.gutterBottom}} gutterBottom variant='h4'>Hisper style</Typography>
          <Button size='large' className={classes.btnColor}>Choisir son modèle</Button>
          </div>
        </div>
        <div className={clsx(classes.bike, classes.girl)}>
          <div>
          <Typography className={classes.headText} variant='h2'>Cruisers</Typography>
          <Typography className={classes.headText} classes={{gutterBottom: classes.gutterBottom}} gutterBottom variant='h4'>Hippie style</Typography>
          <Button size='large' className={classes.btnColor}>Choisir son modèle</Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
