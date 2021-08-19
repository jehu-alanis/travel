import React,{useEffect} from 'react'
import { Typography ,  Card,CardContent,Grid} from '@material-ui/core';
import { makeStyles,ThemeProvider } from '@material-ui/core/styles';
import theme from './Paquetes/ThemeConfig';
import  'aos/dist/aos.css';
import Aos from 'aos';

const BannerSep = ({ id}) => {
    const classes = useStyles();
    useEffect(() => {
      Aos.init({ duration: 2000})
    }, [])
    return (
        <div data-aos="fade-up" id={id} >
            <Grid
            container
            direction="row"
           justifyContent="space-around"
            alignItems="flex-start">

            <ThemeProvider theme={theme}>
             <Card className={classes.logo}>
             <CardContent >
             <Typography variant="h4"  className={classes.title}>Viaja en Septiembre</Typography>
             <Typography variant="h4"  className={classes.subtitle} >Y conoce una de nuestras tradiciones</Typography>
             <Typography variant="h4"  className={classes.subsubtitle} >Fiesta patronal A San fracisco de Asis</Typography>
      
         <Typography variant="subtitle1" color="primary" className={classes.info} >del 22 de sep al 1 de oct.</Typography>
            </CardContent>
            </Card>
            </ThemeProvider>

            <Card className={classes.root}>
             <CardContent >
     
             <Typography variant="h3"  className={classes.us}>Quienes Somos</Typography>
            <Typography variant="h3" className={classes.subus} >Nuestros 10 años de experiencia como agencia 
            de viajes nos respaldan pero, sobre todo, 
            nuestros viajeros que han experimentado y recomendado nuestro servicio único.</Typography>
            <Typography variant="subtitle1" className={classes.descriptionus} > 
            Contamos con la mayor seguridad y confidencialidad de datos para que tus compras en 
            línea estén todo el tiempo protegidas. De esta forma podemos estar tranquilos tanto tú como nosotros
             de que no se hará ningún mal uso de la información que se llegue a proporcionar durante tu compra.
            </Typography>
            <Typography variant="subtitle1" className={classes.descriptionus1} > 
            Con nuestro transporte personalizado no tendrás que lidiar con taxis caros y renta de diferentes transportes.
             Además.
           </Typography>



             <div className={classes.exp}>
             
             <Typography variant="h2" className={classes.exp1}>Con nuestra experiencia 
                       </Typography>
                       <Typography variant="h2" className={classes.exp2}>Te atenderemos bien
                       </Typography>
            <Grid
                      container
                     direction="row"
                     justifyContent="space-between"
                     alignItems="center"
                    >      
             <div className={classes.num}><Typography variant="h3" style={{left:"1rem"}}>20</Typography>
             </div>
            <div className={classes.num}> <Typography variant="h3"style={{left:"1rem"}}>50+</Typography></div> 
            <div className={classes.num}><Typography variant="h3" style={{left:"4rem"}}>200+
                       </Typography></div>   
                 </Grid>
                 <Grid
                      container
                     direction="row"
                     justifyContent="space-between"
                     alignItems="center"
                    >  
                 <div className={classes.num2}><Typography variant="subtitle1" >Year
                                 Experience</Typography> </div>    
                       <div className={classes.num2}><Typography variant="subtitle1" >
                       Tourist
                       Destination</Typography></div>   
                       <div className={classes.num2}>
                       <Typography variant="subtitle1" >Complete
                         tours</Typography>
                         </div>
                         </Grid>      
                       </div>
            </CardContent>
            </Card>

            
            </Grid>
        </div>
    )
}


const useStyles = makeStyles((theme) =>({
    root: {
      backgroundColor: '#FFF ',
      marginTop: "1rem",
      maxWidth:"110vh",
      display:"flex",
      maxHeight: '100vh',
      
     
      [theme.breakpoints.down("sm")]: {
        maxHeight: '90vh',
       },
      
    },
    images:{
        position: "relative",
        overflowY:"hidden",
        overflowX: "scroll",
        "&::-webkit-scrollbar":{
          display:"none",
        },
        [theme.breakpoints.down("sm")]: {
            
            objectFit: "contain",
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "16px", 
            border: "4px solid transparent",
            height:"45rem",
            width:"19rem",
               },
        
        
    },
    logo:{
      backgroundImage:`url(https://i.ibb.co/PgpLtP9/fiestasep.jpg)`,  
      marginTop: "5rem",
      height: "35vw",
        objectFit: "contain",
        backgroundSize: "cover",
        backgroundPosition: "center",
     
      display:"flex",
      [theme.breakpoints.down("sm")]: {
        marginTop: "1rem",
      height: "100vw",
      width:"100vw",  
       },
       
      },
    title:{
        left:"5rem",
        position: "relative",
        marginTop: "1rem",
        fontSize:"2rem",
        color:"#004d40",  
        [theme.breakpoints.down("sm")]: {
            left:"0rem",
            position: "absolute",
            marginTop: "2rem",
           
           }, 
      },
      subtitle:{
        left:"1rem",
        position: "relative",
        marginTop: "3rem",
        fontSize:"1.5rem",
        color:"#fff",
        [theme.breakpoints.down("sm")]: {
            left:"0rem",
            position: "absolute",
            marginTop: "5rem",
            fontSize:"1.5rem",
           },
        
           
      },
      subsubtitle:{
        left:".5rem",
        fontSize:"1.5rem",
        position: "relative",
        marginTop: "2rem",
        marginBottom:"1rem",
        color:"#d50000",
        [theme.breakpoints.down("sm")]: {
            left:"0rem",
            position: "absolute",
            marginTop: "14rem",
            fontSize:"2rem",
           
           },
        
           
      },
      info:{
        left:"4rem",
        fontSize:"1.5rem",
        position: "absolute",
        marginTop: "12rem",
        [theme.breakpoints.down("sm")]: {
            left:"0rem",
            position: "absolute",
            marginTop: "19rem",
            fontSize:"2rem",
           },
        
           
      },
    
      us:{
        left:"15rem",
        fontSize:"2rem",
        position: "relative",
        marginTop: "1rem",
        [theme.breakpoints.down("sm")]: {
          left:"4rem",
        fontSize:"2rem",
        position: "relative",
        marginTop: "1rem",
         },
      },
      subus: {
        left:"1rem",
        fontSize:"1rem",
        position: "relative",
        marginTop: "1rem",
        [theme.breakpoints.down("sm")]: {
          left:"0rem",
        fontSize:"1rem",
        position: "relative",
        marginTop: "1rem",
        maxWidth:"95vw"
         },
      },
      descriptionus:{
        left:"1rem",
        position: "relative",
        marginTop: "1rem",
        maxWidth: "100vh",
        fontSize:"1rem",
        [theme.breakpoints.down("sm")]: {
            left:"1rem",
            position: "absolute",
            marginTop: "1rem",
            maxWidth: "95vw",
           },
      },
      descriptionus1:{
        left:"1rem",
        position: "relative",
        marginTop: "1rem",
        maxWidth: "100vh",
        fontSize:"1rem",
        [theme.breakpoints.down("sm")]: {
            left:"1rem",
            position: "absolute",
            marginTop: "13rem",
            maxWidth: "95vw",
           },
      },

      exp: {
    //  display:"flex",
        left:"1rem",
        fontSize:"1rem",
        position: "relative",
        marginTop: "2rem",
        [theme.breakpoints.down("sm")]: {
          left:"1rem",
          position: "relative",
          marginTop: "18rem",
          maxWidth: "95vw",
         },
      },
      exp1: {
   //   display:"flex",
      left:"2rem",
      fontSize:"3rem",
      position: "relative",
      marginTop: "3rem",
      maxWidth: "100vh",
      [theme.breakpoints.down("sm")]: {
        left:"0rem",
        position: "relative",
        fontSize:"2rem",
        maxWidth: "95vw",
       },
    },
  
    exp2: {
        left:"2rem",
        fontSize:"4rem",
        position: "relative",
        marginTop: "2rem",
        [theme.breakpoints.down("sm")]: {
          left:"0rem",
          position: "relative",
          fontSize:"2rem",
          marginTop: "1rem",
          maxWidth: "95vw",
         },
    },
    num: {
      
      [theme.breakpoints.down("sm")]: {
         fontSize:"2rem",
         maxWidth: "95vw",
       },
  },
  num2: {
      
    [theme.breakpoints.down("sm")]: {
       fontSize:"1rem",
       maxWidth: "25vw",
     },
},
    

  }));

export default BannerSep
