import {React,useState,useRef} from 'react'
import { Typography, Paper, Button } from '@material-ui/core';
import { makeStyles, } from '@material-ui/core/styles';
import axios from 'axios';
import Pdf from "react-to-pdf";


const Itinerariobasic = ({idpaquete,titulo}) => {
  const ref = useRef();

  const [paque, setPaque] = useState(
    {
        data: [],       
      });

  const [loading, setLoading] = useState(true);

  
  const getPaquetes = async () => {
    //var idpaquet = {idpaquete}
    const res = await axios.get(`http://localhost:4000/itenerario/${idpaquete}`);       
      if (res) {
          setPaque({
            data: res.data,
          });
        }
        setLoading(false);
    };



    const classes = useStyles();
 

    if(!paque.data) {
      return null
    }
    return (
        <div  className={classes.root} >
        <Paper >
         <div ref={ref}>
        {
         loading ? ("") :(<Typography>{titulo}</Typography>)
        }
         <ul> 
                {
                    paque.data.map((item) => 
                        <li key={item.iditenerario}>
                        <Typography>{item.title}</Typography>
                            {item.descripcion}
                        </li>
                    )
                    
                }
            </ul>
                   </div>
                   {
               loading ? ( <Button variant="contained" color="primary" onClick={()=>getPaquetes()}> Ver Itinerario
               </Button> ) 
                :  (   
                  <Pdf targetRef={ref} filename="ItinerarioJAO.pdf">
                  {({ toPdf}) => <Button variant="contained" color="primary" onClick={toPdf}>Imprimir</Button>}
                </Pdf> )
                  }
       
        </Paper>
            
 
        </div>
    )
}
const useStyles = makeStyles((theme) =>({
    root: {
      backgroundColor: '#FFF ',
      maxHeight: '100vh',
      display:"flex",
      direction:"row",
  justifyContent:"space-evenly",
  alignItems:"flex-start",
    },
    
  }));

export default Itinerariobasic
