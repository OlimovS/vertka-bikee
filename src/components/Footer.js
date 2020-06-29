import React from 'react';
import { Paper, Button, Typography, IconButton, Divider, Link  } from '@material-ui/core';
import blueGrey from '@material-ui/core/colors/blueGrey';
import grey from '@material-ui/core/colors/grey';
import { makeStyles } from '@material-ui/core/styles';
import TwitterIcon from '@material-ui/icons/Twitter';
import TelegramIcon from '@material-ui/icons/Telegram';
import EmailIcon from '@material-ui/icons/Email';


const useStyles = makeStyles( theme => ({
  paper: {
    textAlign: 'center',
    // backgroundColor: blueGrey[700],
    backgroundColor: '#595F6F',
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    color: grey[300],
    '& div': {
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3),
    },
  },
  btnColor: {
    color: grey[50],
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
  },
}));


function Footer() {
  const classes = useStyles();

  return (
    <Paper square className={classes.paper}>
      <div>
        <Typography variant='h5' gutterBottom>
          Bikees.
        </Typography>
        <Typography variant='subtitle2' gutterBottom>
          PAIEMENT 100% SECURISÉ - DONNÉES CRIPTÉES ET CHIFRÉES.
        </Typography>
        <Typography gutterBottom>
         <Link color='inherit' style={{textDecoration: 'underline'}}>
          Livraison gratuite à partir de 50€ d’achat
         </Link>
        </Typography>
        <Typography variant='subtitle1'>
          ©{' '}BIKEES.2015
        </Typography>
      </div>

      <div style={{paddingLeft: '30px', paddingRight: '30px'}}>
        <Typography variant='subtitle1' gutterBottom>
          FIXIES
        </Typography>
        <Typography variant='subtitle1' gutterBottom>
          CRUISERS
        </Typography>
        <Typography variant='subtitle1' gutterBottom>
          ACCESSOIRES
        </Typography>
        <Typography variant='subtitle1' gutterBottom>
          MENTIONS
        </Typography>
        <Typography variant='subtitle1' gutterBottom>
          C.G.U
        </Typography>
        <Typography variant='subtitle1'>
          CONTACT
        </Typography>
      </div>

      <div>
        <Typography variant='subtitle1' style={{textTransform: 'uppercase'}} gutterBottom>
          Inscription Newsletter
        </Typography>
        <Button size='large' style={{textTransform: 'initial'}} className={classes.btnColor}>Saisissez votre adresse mail</Button>
       <div>
       <IconButton color='inherit'>
         <TwitterIcon />
       </IconButton>
       <IconButton color='inherit'>
         <EmailIcon />
       </IconButton>
       <IconButton color='inherit'>
         <TelegramIcon />
       </IconButton>
       </div>
     </div>
    </Paper>
  );
}

export default Footer;
