import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Forward10Icon from '@material-ui/icons/Forward10';
import { Typography, IconButton } from '@material-ui/core';
const Bannerbasic = ({images,rating,titulo,descripcion}) => {
  
    const classes = useStyles();
    

    
 if(!images){
   return <div className={classes.spinner}>
   <IconButton size="small" className={classes.spinner}> <Forward10Icon className={classes.spinner}/></IconButton>
   
   </div>
 }
     return (
     
        <div className={classes.banner} style={{
            
            backgroundImage:`url(${images})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          
        }}>
            <Typography variant="h2" component="h1" className={classes.title}>
            {titulo}
               </Typography>

               <Typography style={{ wordWrap: "reak-word"}} variant="h6" className={classes.description} >
               {descripcion}
          
    
            </Typography> 
            <IconButton size="medium" className={classes.rating}>
                  {
                    Array(parseInt(rating))
                      .fill()
                      .map((_, i) => (
                        <p key={i}>&#11088;</p>
                      ))}
                </IconButton> 
            <Typography variant="subtitle1" className={classes.vencimiento}>
            Reserva antes del 31 de Diciembre del año en curso
            </Typography>
        </div>
    )
}


const useStyles = makeStyles((theme) =>({
    root: {
      backgroundColor: '#FFF ',
      maxHeight: '100vh',
    },
    banner:{
      position: "relative",
        height: "25vw",
        objectFit: "contain",
        
        [theme.breakpoints.down("sm")]: {
          height: "75vw",
         },
      },
      description:{
        left:"3rem",
        color:"#fff",
        position: "absolute",
        marginTop: "10rem",
        maxWidth: "120vh" ,
        [theme.breakpoints.down("sm")]: {
          left:"1rem",
          marginTop: "9rem",
        maxWidth: "120vh" ,
        fontSize:"1rem",
         },
        
      },
      title:{
        left:"3rem",
        color:"#fff",
        position: "absolute",
        marginTop: "5rem",
        [theme.breakpoints.down("sm")]: {
          marginTop: "4rem",
        maxWidth: "120vh" ,
        fontSize:"2rem",
         },
      },
      vencimiento:{
        left:"3rem",   
        position: "absolute",
        marginTop: "18rem",
        maxWidth: "120vh",
        [theme.breakpoints.down("sm")]: {
          left:"1rem",
          marginTop: "14rem",
        maxWidth: "120vh" ,
        fontSize:"1rem",
         },
         color:"#fff",
      },
      rating:{
        left:"10.2rem",
        color:"#fff",
        position: "absolute",
        marginTop: "12rem",
        [theme.breakpoints.down("sm")]: {
          left:"12rem",
          marginTop: "13rem",
        
         },
      },
      spinner:{
        border: "4px  solid rgba(0,0,0,.1)",
        width: "90vw",
        height: "90vh",
        borderRadius:"50%",
        borderLeftColor: "transparent",
        animation: "spin 1s linear infinite"
      },
    
  }));



export default Bannerbasic
