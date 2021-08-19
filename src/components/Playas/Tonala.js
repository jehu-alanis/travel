import React,{useEffect} from 'react'
import { makeStyles} from '@material-ui/core/styles';
import { Typography , Paper, Card,CardContent,IconButton} from '@material-ui/core';
import logo from '../images/parque.jpg';
import Brightness5Icon from '@material-ui/icons/Brightness5';
import AirportShuttleIcon from '@material-ui/icons/AirportShuttle';
import ApartmentIcon from '@material-ui/icons/Apartment';
import  'aos/dist/aos.css';
import Aos from 'aos';

const Tonala = () => {
    const classes = useStyles();

    useEffect(() => {
      Aos.init({ duration: 2000})
    }, [])
    return (

        <Card data-aos="fade-up" className={classes.root}>
        <CardContent>
            <Typography variant="h4"  className={classes.title}>Enamorate de</Typography>
            <Typography variant="h2" className={classes.subtitle} >Tonala</Typography>
            <Typography variant="subtitle1" className={classes.description} > 
            You can find the most beautiful 
            and pleasant 
            places at the best prices with special discounts, 
            you choose the place we will guide you all the way to wait, get your place now.
            </Typography>
         <Paper className={classes.icons}>
           <IconButton>
             <ApartmentIcon/>
             </IconButton>
             <IconButton>
             <Brightness5Icon/>
             </IconButton>
             <IconButton>
             < AirportShuttleIcon/>
             </IconButton>
         </Paper>
         <div className={classes.images}>
            <img src={logo} alt="logo"  className={classes.logo2} />         
            
         </div>
        
            </CardContent>
            </Card>
    )
}


const useStyles = makeStyles((theme) =>({
    root: {
      backgroundColor: '#FFF ',
      marginTop: "1rem",
      
      display: 'flex',
     
      [theme.breakpoints.down("sm")]: {
        maxHeight: '90vh',
       },
    },
    images:{
        position: "relative",
        
        display: 'flex',
        left:"1rem",
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
    logo2:{
        marginBottom: theme.spacing(1),
        marginRight: theme.spacing(4),
        position: "relative",
        borderRadius: "16px", 
        border: "4px solid transparent",
        height: "30rem",
        maxWidth:"45rem",
        objectFit: "contain",
          transition: "transform 450ms",
          "&:hover": {
            transform: "scale(1.15)",
          },
          [theme.breakpoints.down("sm")]: {
            
            objectFit: "contain",
            backgroundSize: "cover",
            backgroundPosition: "center",
           
           },  
       
      },
    title:{
        left:"60rem",
        position: "absolute",
        marginTop: "2rem",
        [theme.breakpoints.down("sm")]: {
            left:"5rem",
            position: "absolute",
            marginTop: "2rem",
           
           },
     
       
      },
      subtitle:{
        left:"62rem",
        
        position: "absolute",
        marginTop: "5rem",
        [theme.breakpoints.down("sm")]: {
            left:"7rem",
            position: "absolute",
            marginTop: "5rem",
            fontSize:"2.4rem",
           },
        
        
      },
      description:{
        left:"55rem",
        position: "absolute",
        marginTop: "10rem",
        maxWidth: "70vh",
        [theme.breakpoints.down("sm")]: {
            left:"2rem",
            position: "absolute",
            marginTop: "29rem",
            maxWidth: "50vh",
           },
      },

      icons:{
        backgroundColor: '#FFF ',
        position: "absolute",
        marginTop: "18rem",
        maxWidth: "40vh",
        left:"60rem",
        [theme.breakpoints.down("sm")]: {
            display:"flex",
            left:"7rem",
            position: "absolute",
            marginTop: "25rem",
            maxWidth: "100vh",
           },
      }
    

  }));

export default Tonala
