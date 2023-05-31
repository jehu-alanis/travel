import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Paper, Card, CardContent, IconButton } from '@material-ui/core';
import logo from '../images/puertoarista.jpg';
import logo2 from '../images/puertoarista2.jpg';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import Brightness5Icon from '@material-ui/icons/Brightness5';
import DeckOutlinedIcon from '@material-ui/icons/DeckOutlined';
import 'aos/dist/aos.css';
import Aos from 'aos';

const Puertoarista = () => {
  const classes = useStyles();
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <Card data-aos="fade-up" className={classes.root}>
      <CardContent>
        <Typography variant="h4" className={classes.title}>Conoce</Typography>
        <Typography variant="h2" className={classes.subtitle} > Puerto Arista</Typography>
        <Typography variant="subtitle1" className={classes.description} >
          You can find the most beautiful
          and pleasant
          places at the best prices with special discounts,
          you choose the place we will guide you all the way to wait, get your place now.
        </Typography>
        <Paper className={classes.icons}>
          <IconButton>
            <BeachAccessIcon />
          </IconButton>
          <IconButton>
            <Brightness5Icon />
          </IconButton>
          <IconButton>
            < DeckOutlinedIcon />
          </IconButton>
        </Paper>
        <div className={classes.images}>

          <img src={logo} alt="logo" className={classes.logo} />
          <img src={logo2} alt="logo" className={classes.logo} />

        </div>
      </CardContent>
    </Card>


  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#FFF ',
    marginTop: "1rem",
    display: "flex",
   
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      minHeight: '80vh',
    },
  },
  images: {
    display: "flex",
    justifyContent: "flex-end",
    left: "25rem",
    marginTop: "7rem",
    position: "relative",
    overflowY: "hidden",
    overflowX: "scroll",
    "&::-webkit-scrollbar": {
      display: "none",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "1rem",
      left: "0.5rem",
    },
  },
  logo: {
    marginBottom: theme.spacing(1),
    border: "4px solid transparent",
    borderRadius: "16px",
    maxHeight: "13rem",
    objectFit: "contain",
    marginRight: theme.spacing(4),
    transition: "transform 450ms",
    backgroundSize: "cover",
    "&:hover": {
      transform: "scale(1.15)",
    },

    [theme.breakpoints.down("sm")]: {
      maxHeight: "6rem",
      marginRight: theme.spacing(2),
    },
  },
  title: {
    left: "8rem",
    position: "absolute",
    marginTop: "4rem",

    [theme.breakpoints.down("sm")]: {
      position: "relative",
      marginTop: "2rem",
      left: "7rem",
    },

  },
  subtitle: {

    left: "3rem",
    position: "absolute",
    marginTop: "8rem",
    [theme.breakpoints.down("sm")]: {
      position: "relative",
      marginTop: "1rem",
      left: "4rem",
      fontSize: "2.5rem",
    },


  },
  description: {
    left: "3rem",
    position: "absolute",
    marginTop: "13rem",
    maxWidth: "70vh",
    [theme.breakpoints.down("sm")]: {
      // position: "relative",
      marginTop: "13rem",

    },
  },

  icons: {
    backgroundColor: '#FFF ',
    position: "absolute",
    marginTop: "19rem",
    maxWidth: "40vh",
    marginLeft: theme.spacing(12),
    [theme.breakpoints.down("sm")]: {
      // position: "relative",
      marginTop: "9rem",

    },
  }


}));


export default Puertoarista
