import React from 'react';

import { AppBar, Toolbar, Typography } from '@material-ui/core';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  appBar: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  logo: {
    marginRight: 'auto',
  },
});


function Nav() {
  const classes = useStyles();

  return (
   <AppBar className={classes.appBar}>
     <Toolbar>
       <IconButton>
          <MenuOpenIcon  style={{fontSize: '2rem', color: 'white'}}/>
       </IconButton>
       <Typography variant='h5' className={classes.logo}>
         Bikees.
       </Typography>
       <IconButton>
          <SearchIcon style={{fontSize: '2rem', color: 'white'}}/>
       </IconButton>
     </Toolbar>
   </AppBar>
  );
}

export default Nav;
