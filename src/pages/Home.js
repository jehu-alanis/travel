import React from 'react'
import Header from '../components/Header';
import Banner from '../components/Banner';
import { FormHelperText, makeStyles } from '@material-ui/core';
import Lugares from '../components/Lugares';
import Paquetes from '../components/Paquetes';
import Hoteles from '../components/Hoteles';
import Footer from '../components/Footer';
import BannerSep from '../components/BannerSep';

function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />
      <Banner />
      <Paquetes title="Tours" id="paquetes" />
      <Lugares title="Lugares" id="lugares" />
      <BannerSep id="about" />
      <Hoteles title="Hoteles" id="hoteles" />
      <Footer />
    </div>
  )
}



const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: '#FFF ',
    minHeight: '100vh',
  },
}));


export default Home
