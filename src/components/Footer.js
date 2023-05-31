import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import oxxo from './images/oxxo.svg';
import { Grid, Typography } from '@material-ui/core';

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid
        container
        direction="row"
        justifyContent="space-around"
        alignItems="center"
      >
        <img src={oxxo} alt="oxxo" className={classes.logooxxo} />
        <img src="https://i.ibb.co/tH2ZczL/sponsors1.png" alt="airbnb" className={classes.logo} />
        <img src="https://i.ibb.co/7Khnjdd/sponsors3.png" alt="shopify" className={classes.logo} />
        <img src="https://i.ibb.co/ZgT3sXt/sponsors4.png" alt="paypal" className={classes.logo} />
        <img src="https://i.ibb.co/XS2WJ73/stripe.png" alt="estripe" className={classes.logo} />
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="space-around"
        alignItems="center"
      >
        <Typography variant="subtitle1" aling="left">Terms & Agreements</Typography>
        <Typography variant="subtitle1" aling="center">&#169; 2021 JAO. All rigths reserved.</Typography>
        <Typography variant="subtitle1" aling="right">Privacy Policy</Typography>
      </Grid>
    </div>
  )
}
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#fff ',
    marginTop: "1rem",
    display: "flex",
    flexWrap: "wrap",
    maxHeight: '80vh',
    [theme.breakpoints.down("sm")]: {
      minHeight: '80vh',
    },
  },

  logo: {
    marginBottom: theme.spacing(1),
    maxHeight: "2rem",
    position: "relative",
    objectFit: "contain",
    marginRight: theme.spacing(2),
    transition: "transform 450ms",
    backgroundSize: "cover",
    "&:hover": {
      transform: "scale(1.15)",
    },
    [theme.breakpoints.down("sm")]: {
      maxHeight: "3rem",
      display: "flex",
    },
  },
  terms: {
    marginTop: "2rem",
  },

  logooxxo: {
    marginBottom: theme.spacing(1),

    maxHeight: "4rem",
    position: "relative",
    // width:"32rem",
    objectFit: "contain",
    marginRight: theme.spacing(2),
    transition: "transform 450ms",
    backgroundSize: "cover",
    "&:hover": {
      transform: "scale(1.15)",
    },
  },


}));


export default Footer
