import React from 'react'
import crucecita from "./images/crucecita.jpg";
import { makeStyles } from '@material-ui/core/styles';
import { Typography, IconButton } from '@material-ui/core';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import { pink, blue } from '@material-ui/core/colors';
import Forward10Icon from '@material-ui/icons/Forward10';
function Banner() {
  const classes = useStyles();

  if (!crucecita) {
    return <div className={classes.spinner}>
      <IconButton size="small" className={classes.spinner}> <Forward10Icon className={classes.spinner} /></IconButton>

    </div>
  }

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <Typography variant="subtitle1" component="h1" className={classes.subtitle} gutterBottom>
          Visita México
        </Typography>
        <Typography variant="h2" component="h1" className={classes.title} gutterBottom >
          Descubre <br></br> <b>Tonala Chiapas</b>
        </Typography>
      </div>
      <div className={classes.icons}>
        <IconButton >
          <FacebookIcon style={{ color: blue[700] }} fontSize="large" />
        </IconButton>
        <IconButton>
          <InstagramIcon style={{ color: pink[400] }} fontSize="large" />
        </IconButton>
        <IconButton >
          <TwitterIcon style={{ color: blue[700] }} color="primary" fontSize="large" />
        </IconButton>
      </div>

    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    backgroundImage: `url(${crucecita})`,
    height: "46vw",
    objectFit: "contain",
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "#fff",
    [theme.breakpoints.down("sm")]: {
      height: "100vh",
      objectFit: "contain",
      backgroundSize: "cover",
      backgroundPosition: "center",
      color: "#fff",
    },
  },
  title: {
    left: "6rem",
    position: "absolute",
    marginTop: "18rem",
    [theme.breakpoints.down("sm")]: {
      left: "2rem",
      marginTop: "13rem",
      fontSize: "2.4rem",
    },
  },
  subtitle: {
    left: "6rem",
    position: "absolute",
    marginTop: "16rem",
    [theme.breakpoints.down("sm")]: {
      left: "2rem",
      marginTop: "10rem",
      fontSize: "1.4rem",
    },
  }, icons: {
    left: "6rem",
    position: "absolute",
    marginTop: "30rem",
  },
  spinner: {
    border: "4px  solid rgba(0,0,0,.1)",
    width: "100vw",
    height: "100vh",
    borderRadius: "50%",
    borderLeftColor: "transparent",
    animation: "spin 1s linear infinite"
  },

}));

export default Banner
