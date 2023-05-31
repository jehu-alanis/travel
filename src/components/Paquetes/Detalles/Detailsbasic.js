import React, { useState, useEffect } from 'react';
import { Typography, Card, CardContent, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Forward10Icon from '@material-ui/icons/Forward10';
import hoteles from '../../../hoteles-data';

const Detailsbasic = ({ hotelid}) => {
  const classes = useStyles();

  const [hotelPaquete, setHotelPaquete] = useState(
    {
      data: [],
    });

    useEffect(() => {
      setHotelPaquete({
        data: hoteles.find(hotel => hotel.id == hotelid)
      });
  }, [hotelid]);

  return (
    <div className={classes.root}>
      <Card className={classes.details}>
        <CardContent>
          <Typography variant="h4" gutterBottom>Detalles del Paquete:</Typography>
          <Typography variant="h6" gutterBottom>{hotelPaquete.data && hotelPaquete.data.nombreH}</Typography>
          <div className={classes.headerHotel}>
            <img src={hotelPaquete.data && hotelPaquete.data.image} alt="logo" className={classes.hotel} />
            <div className={classes.headerHotel2}>
              <Typography variant="h6" gutterBottom> Capacidad: 4 Max</Typography>
              <Typography variant="h6" gutterBottom>Adultos: 2 Max</Typography>
              <Typography variant="h6" gutterBottom>Niños: 2 Max</Typography>
            </div>
          </div>
          <div className={classes.HotelDesc}>
            <Typography variant="h6" gutterBottom className={classes.HotelDesc}>Caracteristicas de la Habitación</Typography>
            <Typography variant="body1" className={classes.HotelDescVa} gutterBottom>Habitaciones con 1 cama King size.
              Cuentan con servicio a la habitación 24 horas (cargo extra por entrega),
              amenidades de baño y toallas de playa, puertos USB, plancha y mesa para planchar, pantalla plana,
              aire acondicionado, secadora de cabello, consola para Ipod y radio reloj despertador, cafetera,
              minibar (reabastecido cada 2 días con agua, refresco y cerveza), wifi (2 dispositivos por habitación)
              ($), caja de seguridad ($), teléfono $.</Typography>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#FFF ',
    maxHeight: '50vh',
    [theme.breakpoints.down("sm")]: {

      display: "flex",
      fontSize: "1rem",
      maxWidth: "90vw",
      minHeight: '110vh',
    },
  },

  hotel: {
    maxHeight: "8rem",
    [theme.breakpoints.down("sm")]: {
      maxHeight: "15rem",
    },
  },
  headerHotel: {
    display: "flex",
    width: "25vw",
    minWidth: "100vh",
    [theme.breakpoints.down("sm")]: {
      maxHeight: '100vh',
      fontSize: "1rem",

    },
  },
  headerHotel2: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    minWidth: "40vh",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
      //maxHeight: '100vh',
      marginTop: "17rem",
      alignItems: "center",
      flexWrap: "wrap",
      minWidth: "10vh",
      marginLeft: "-14rem"
    },
  },
  details: {
    height: "33vw",
    [theme.breakpoints.down("sm")]: {

      fontSize: "1rem",
      minHeight: '105vh',
    },
  },
  HotelDesc: {

    flexWrap: "wrap",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
      maxHeight: '40vh',
      display: "flex",
      maxWidth: "120vh",
    },
  },
  HotelDescVa: {
    maxWidth: "100vh",
    [theme.breakpoints.down("sm")]: {
      marginTop: "2rem",
      position: "absolute",
      fontSize: "1rem",
      maxWidth: "70vh",
      maxHeight: '10vh',
      "&:h6": {
        fontSize: "1rem",
        maxWidth: "100vh",
      },
      "&:body1": {
        fontSize: "0.5rem",
        maxWidth: "130vh",
      },
    },
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

export default Detailsbasic
