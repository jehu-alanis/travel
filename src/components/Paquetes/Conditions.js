import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { List,ListItem ,ListItemIcon,ListItemText } from '@material-ui/core';
import DoneAllIcon from '@material-ui/icons/DoneAll';
const Conditions = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
           
            <List >
            
                <ListItem>
                  <ListItemIcon>
                    <DoneAllIcon />
                  </ListItemIcon>
                  <ListItemText
                  className={classes.text}
                    primary="¡Reserva hoy o antes del 31 de diciembre del año en curso!."
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <DoneAllIcon />
                  </ListItemIcon>
                  <ListItemText
                  className={classes.text}
                    primary="Hasta dos niños menores de 12 años se hospedan gratis en el hotel, 
                    un menor por cada adulto pagado. (Es necesario considerar la capacidad máxima de personas 
                      permitidas dentro de la habitación)."
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <DoneAllIcon />
                  </ListItemIcon>
                  <ListItemText
                  className={classes.text}
                    primary="No incluye transportación terrestre, ni aérea(Para llegar al Estado/municipio)."
                  />
                </ListItem>
                             
           
            <ListItem>
                  <ListItemIcon>
                    <DoneAllIcon />
                  </ListItemIcon>
                  <ListItemText
                  className={classes.text}
                    primary="Precios finales con todos los impuestos incluidos sin cargos extras."
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <DoneAllIcon />
                  </ListItemIcon>
                  <ListItemText
                  className={classes.text}
                    primary="Será necesario pagar una cuota de aproximadamente 25 mxn por derechos de 
                    saneamiento ambiental, por noche, por habitación."
                  />
                </ListItem> 
                <ListItem>
                  <ListItemIcon>
                    <DoneAllIcon />
                  </ListItemIcon>
                  <ListItemText
                  className={classes.text}
                    primary="La tarifa puede variar de acuerdo a la fecha de estancia (Más días)."
                  />
                </ListItem>
            </List>
        
        </div>
    )
}

const useStyles = makeStyles((theme) =>({
    root: {
      backgroundColor: '#FFF ',
     minHeight: '20vh',
     // maxWidth: '100vh',
      display:"flex",
      direction:"row",
      justifyContent:"space-evenly",
      alignItems:"flex-start",
      flexWrap: "wrap"
       },
       text:{
        [theme.breakpoints.down("sm")]: {
         
          //position: "relative",
         maxWidth: "100vh",
          fontSize:"1rem",
          },
       }
    
  }));

export default Conditions
