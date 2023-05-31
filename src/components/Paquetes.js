import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, IconButton }
  from '@material-ui/core';
import Forward10Icon from '@material-ui/icons/Forward10';
import 'aos/dist/aos.css';
import Aos from 'aos';
import Paquete from './Paquete';
import axios from 'axios';
import paquetes from '../paquetes-data';

const Paquetes = ({ title, id }) => {
  const classes = useStyles();
  const [paque, setPaque] = useState(
    {
      data: [],
    });

  useEffect(() => {
    Aos.init({ duration: 2000 })
    //getPaquetes();
  }, [])

  /* const getPaquetes = async () => {

    const res = await axios.get(`http://localhost:4000/paquetes`);

    if (res) {
      setPaque({
        data: res.data,
      });
    }
  }; */

  if (!paque) {
    return <div className={classes.spinner}>
      <IconButton size="small" className={classes.spinner}> <Forward10Icon className={classes.spinner} /></IconButton>

    </div>
  }
  return (

    <div data-aos="fade-up" id={id} >
      <div className={classes.head}>
        {title}
      </div>
      <Grid
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems="flex-start"
      >
        {
          paquetes.map((paque, i) => (
            <Grid key={i} item xs={12} sm={6} md={4} lg={3}>
              <Paquete key={paque.id} paque={paque} />
            </Grid>
          ))
        }
      </Grid>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  head: {
    marginTop: "1rem",
    fontSize: "3rem",
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "30%",
    },
  },

  root: {
    maxWidth: "60vh",
    marginTop: "3rem",
    marginBottom: "1rem",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    alignContent: "space-between",
  },

  spinner: {
    border: "4px  solid rgba(0,0,0,.1)",
    width: "90vw",
    height: "90vh",
    borderRadius: "50%",
    borderLeftColor: "transparent",
    animation: "spin 1s linear infinite"
  },

}));

export default Paquetes
