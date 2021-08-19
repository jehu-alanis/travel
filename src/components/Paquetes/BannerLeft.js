import React from 'react'
import { Typography, Card, CardContent, Divider, Badge } from '@material-ui/core';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import theme from './ThemeConfig';

const BannerLeft = ({precio}) => {
    const classes = useStyles();
    return (
        <ThemeProvider theme={theme}  >
            <Card className={classes.paper} precio={precio}>
       
       <CardContent>

       <Typography variant="subtitle2"align="right"  gutterBottom >Viaja por solo</Typography>
       
       <Badge color="secondary" badgeContent= "Oferta" > 
       </Badge>
       <Typography variant="h2" align="center"  gutterBottom>${precio} MX</Typography>
      
       <Typography variant="subtitle2" align="right"  gutterBottom>Impuestos Incluidos</Typography>
       <Divider variant="middle" />
      <div  className={classes.pagos}>
       <Typography variant="h6" align="center" color="primary" gutterBottom>Sistema de apartado</Typography>
       <Typography variant="h6" align="center"  color="primary"gutterBottom>Depósito o transferencia</Typography>
       <Typography variant="h6" align="center"  color="primary" gutterBottom>Debito o Credito</Typography>
       <Typography variant="h6" align="center"  color="primary" gutterBottom>Se aceptan todas las tarjetas</Typography>
       </div>
       <Divider variant="middle" />
       <div className={classes.dudas}>
       <Typography variant="h6"  align="center" color="primary" gutterBottom>¿Tienes dudas?</Typography>
       <Typography variant="h6" align="center"  color="primary"gutterBottom>Llámanos y te atenderemos al instante</Typography>
       <Typography variant="h6" align="center"  color="primary"gutterBottom>Ó mandanos un WhatsApp</Typography>
       </div>

       <Divider variant="middle" />
       <div className={classes.dudas}>
       <Typography variant="h6"  align="center" color="primary" gutterBottom>Cancela Gratis</Typography>
       <Typography variant="h6" align="center"  color="primary"gutterBottom>Hasta 1 semana antes de tu fecha</Typography>
       </div>

       
       </CardContent>
      </Card>
        </ThemeProvider>
    )
}
const useStyles = makeStyles((theme) =>({
   
    paper: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(4),
        padding: theme.spacing(2),
       
          [theme.breakpoints.down("sm")]: {
           
            display:"flex",
            direction:"column",
            justifyContent:"flex-start",
            alignItems:"center",
            flexWrap: "wrap",
            fontSize:"1rem",
            maxWidth: "30vh",   
           },
       
      },
      dudas:{
        backgroundColor: '#00bb2d',
        width: "25vw",
        [theme.breakpoints.down("sm")]: {
          marginLeft:"1rem",
          marginTop: "1rem",
          display:"flex",
          direction:"column",
          justifyContent:"flex-start",
          alignItems:"center",
          flexWrap: "wrap",
          fontSize:"1rem",
          width: "55vw",   
         },
      },
      pagos:{
        backgroundColor: '#010C30',
        width: "25vw",
        [theme.breakpoints.down("sm")]: {
          marginLeft:"1rem",
          marginTop: "1rem",
          display:"flex",
          direction:"column",
          justifyContent:"flex-start",
          alignItems:"center",
          flexWrap: "wrap",
          fontSize:"1rem",
          width: "55vw",   
         },
      },
  }));
export default BannerLeft
