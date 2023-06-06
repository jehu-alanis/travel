import React, { useState, useEffect } from 'react'
import { connect } from "react-redux";
import agregarBasket from '../../redux/actions/agregarBasket';
import agregarFechas from '../../redux/actions/agregarFechas';
import { makeStyles } from '@material-ui/core/styles';
import StepInfo from './StepInfo';
import Header from './Header';
import Conditions from './Conditions';
import axios from "axios";
import { Typography, IconButton, Grid, Paper, Button } from '@material-ui/core';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import HotelIcon from '@material-ui/icons/Hotel';
import AirportShuttleIcon from '@material-ui/icons/AirportShuttle';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import { addDays, subDays } from "date-fns";
import es from 'date-fns/locale/es';
import BannerLeft from './BannerLeft';
import Bannerbasic from './banners/Bannerbasic';
import Detailsbasic from './Detalles/Detailsbasic';
import Itinerariobasic from '../Itenerarios/Itinerariobasic';
import Forward10Icon from '@material-ui/icons/Forward10';
import { useHistory, useParams } from 'react-router-dom';
import swal from 'sweetalert';
import paquetes from '../../paquetes-data';

registerLocale('es', es);


const Paquetebasic = ({ agregarBasket, agregarFechas }) => {
  
  const [startDate, setStartDate] = useState(new Date());
  
  const history = useHistory();
  
  const [endDate, setEndDate] = useState(new Date(addDays(startDate, +2)));
  console.log("en el estado",startDate,'startDate',endDate,"endDate");
  
  const onChange = (dates) => {
    const [start] = dates;
    setStartDate(start);
    setEndDate(addDays(startDate, paque.data.dias - 1));
  };
  const classes = useStyles();

  const [paque, setPaque] = useState(
    {
      data: [],
    });

  const [fecha, setFecha] = useState({
    total: null,
  });

  const getFecha =  (startDate, endDate) => {
    var date = startDate;
    var datew = endDate;
    const fecha_año = (date.getFullYear()).toString();
    const fecha_mes = (date.getMonth() + 1).toString().padStart(2, '0');
    const fecha_dia = (date.getDate()).toString().padStart(2, '0');
    const fecha_año1 = (datew.getFullYear()).toString();
    const fecha_mes1 = (datew.getMonth() + 1).toString().padStart(2, '0');
    const fecha_dia1 = (datew.getDate()).toString().padStart(2, '0');
    const hotel = (paque.data.hotel);
    const fecha_entrada = `${fecha_año}-${fecha_mes}-${fecha_dia}`;
    const fecha_salida = `${fecha_año1}-${fecha_mes1}-${fecha_dia1}`;
console.log(fecha_entrada, fecha_salida);
    //const res = await axios.get(`http://localhost:4000/calendario/count/${fecha_entrada}/${fecha_salida}/${hotel}`);
    /* if (res) {
      setFecha({
        total: res.data,
      });
    } */
    ir();
  };
  
  const { paquetesid } = useParams();
  useEffect(() => {

    setPaque({
      data: paquetes.find(paquete => paquete.paquetesid == paquetesid)
    });


  }, []);

  const [loading, setLoading] = useState(false);

  const ir = () => {
   /*  if (res.data >= 6) {
      swal({
        title: " Fechas ocupadas",
        text: "Vuelve a escojer fechas",
        icon: "error",
        button: "Aceptar",
      })
    } */
   /*  if (res.data <= 5) { }*/
      swal({
        title: " Fechas disponibles",
        text: "Sigue adelante",
        icon: "success",
        button: "Aceptar"
      }).then((value) => {
        setLoading(true);
      });
    
  }

  const agregarPaquete = async (startDate, endDate) => {
    agregarBasket(paque.data);
    


    const fecha_año = (startDate.getFullYear()).toString();
    const fecha_mes = (startDate.getMonth() + 1).toString().padStart(2, '0');
    const fecha_dia = (startDate.getDate()).toString().padStart(2, '0');
    const fecha_año1 = (endDate.getFullYear()).toString();
    const fecha_mes1 = (endDate.getMonth() + 1).toString().padStart(2, '0');
    const fecha_dia1 = (endDate.getDate()).toString().padStart(2, '0');
    const fecha_entrada = `${fecha_año}-${fecha_mes}-${fecha_dia}`;
    const fecha_salida = `${fecha_año1}-${fecha_mes1}-${fecha_dia1}`;
    
    agregarFechas(startDate);
    
    agregarFechas(endDate);
    history.push(`/checkout`);
    /* setPaque({ data: [] });
    setStartDate(new Date());
    setEndDate(new Date(addDays(startDate, +2)));
    setFecha({ total: null });
 */
  }
  const { loader } = paque;
  if (loader) {
    return <div className={classes.spinner}>
      <Forward10Icon />
    </div>
  }

  return (
    <div className={classes.root}>
      <Header />
      <Bannerbasic rating={paque.data.rating}
        images={paque.data.images}
        titulo={paque.data.titulo}
        descripcion={paque.data.descripcion} />
      <Typography variant="h4" align="center" >Tu viaje en 3 pasos:</Typography>
      <div className={classes.step}>
        <StepInfo />
      </div >
      <div className={classes.includes}>
        <Typography variant="h4" align="center"> Incluye:</Typography>
        <Grid
          container
          direction="row"
          justifyContent="space-evenly"
          alignItems="flex-start"
        >
          <IconButton size="medium" >
            <PeopleAltIcon fontSize="large" />
            <Typography className={classes.include}> 2 Personas Adultas </Typography>
          </IconButton>
          <IconButton size="medium">
            <HotelIcon fontSize="large" />
            <Typography className={classes.include}>Hotel </Typography>
          </IconButton>
          <IconButton size="medium" >
            <AirportShuttleIcon fontSize="large" />
            <Typography className={classes.include}> Transportes Locales</Typography>
          </IconButton>
        </Grid>
      </div>
      <Grid
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems="flex-start"
      >
        <div className={classes.date}>
          <Typography variant="h4">Escoge Tus dias de Vacaciones</Typography>
          <Paper className={classes.paper}>
            <DatePicker
              locale="es"
              selected={startDate}
              onChange={onChange}
              startDate={startDate}
              endDate={addDays(startDate, paque.data.dias - 1)}
              minDate={subDays(new Date(), 0)}
              selectsRange
              inline
              className="pickers"
              dateFormat="yyyy'-'MMMM'-'dd" />
            <div>
              {
                loading ? (<Typography variant="subtitle2">Cuando estes listo oprime comprar</Typography>)
                  : (<Typography variant="subtitle2">Consulta las fechas disponibles (as doble click en LA FECHA que desses)</Typography>)
              }
              <div className={classes.button}>
                {
                  loading ? (<Button
                    variant="contained"
                    color="primary"
                    onClick={() => agregarPaquete(startDate, endDate)}>
                    Comprar
                  </Button>) :
                    (<Button
                      variant="contained"
                      color="primary"
                      onClick={() => getFecha(startDate, endDate)}>
                      Ver Fechas
                    </Button>)
                }
              </div>
            </div>
          </Paper>
          <div className={classes.details}>
            <Detailsbasic hotelid={paque.data.hotel} />
          </div>
        </div>
        <div className={classes.BannerLeft}>
          <BannerLeft precio={paque.data.precio} />
        </div>
      </Grid>
      <div className={classes.itinerario}>
        <Typography variant="h4" align="center" gutterBottom>Itinerario de Viaje:</Typography>
        <Itinerariobasic idpaquete={paque.data.paquetesid} />
      </div>
      <div className={classes.conditions}>
        <Typography variant="h4" align="center">Condiciones:</Typography>
        <Conditions />
      </div>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#FFF ',
    minHeight: '100vh',
    display: "flex",
    flexDirection: "column",
  },
  step: {
    marginTop: "2rem",
    backgroundColor: '#FFF ',
    maxHeight: '15rem',
    maxWidth: '200vh',
    marginLeft: "4rem",
    [theme.breakpoints.down("sm")]: {
      marginTop: "1rem",
      marginLeft: "0rem",
      position: "relative",
      maxHeight: "20vh",
      maxWidth: "20vw",
      display: "flex",
      direction: "column",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      flexWrap: "wrap",
    },
  },
  itinerario: {
    marginTop: "12rem",
    backgroundColor: '#FFF ',
    marginLeft: "6rem",
    [theme.breakpoints.down("sm")]: {
      marginTop: "1rem",
      marginLeft: "1rem",
      maxWidth: "80vw",
    },
  },
  conditions: {
    marginTop: "2rem",
    backgroundColor: '#FFF ',
    marginLeft: "1rem",

  },
  includes: {
    marginTop: "1rem",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "1rem",
      marginTop: "4rem",
      display: "flex",
      direction: "column",
      justifyContent: "flex-start",
      alignItems: "center",
      flexWrap: "wrap",
    },
  },
  include: {
    marginLeft: "1rem",
  },
  date: {
    height: "25vw",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "1rem",
      marginTop: "1rem",
      display: "flex",
      direction: "column",
      justifyContent: "flex-start",
      alignItems: "center",
      flexWrap: "wrap",
    },
  },

  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(4),
    padding: theme.spacing(2),
    display: "flex",
    direction: "row",
    justifyContent: "space-evenly",
    alignItems: "flex-start",
    [theme.breakpoints.down("sm")]: {
      marginTop: "1rem",
      marginLeft: "0rem",
      position: "relative",
      minHeight: "39vh",
      minWidth: "70vw",
      display: "flex",
      direction: "column",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      flexWrap: "wrap",
    },
  },
  details: {
    [theme.breakpoints.down("sm")]: {
      marginTop: "0rem",
      marginLeft: "0rem",
      position: "relative",
      maxHeight: "100vh",
      maxWidth: "100vw",
    },
  },
  BannerLeft: {
    [theme.breakpoints.down("sm")]: {
      marginTop: "80rem",
      marginLeft: "0rem",
    },
  },
  button: {
    maxHeight: "5vw",
    maxWidth: '15vh',
    marginLeft: "4rem",
    marginTop: "6rem",
    [theme.breakpoints.down("sm")]: {
      maxHeight: "5vw",
      maxWidth: '15vh',
      marginLeft: "4rem",
      marginTop: "1rem",
    },
  },
  spinner: {
    border: "4px  solid rgba(0,0,0,.1)",
    width: "100vw",
    height: "100vh",
    borderRadius: "50%",
  },

}));
const mapDispatchToProps = ({
  agregarBasket,
  agregarFechas
});
export default connect(null, mapDispatchToProps)(Paquetebasic)
