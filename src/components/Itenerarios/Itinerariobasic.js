import { React, useState, useRef, useEffect } from 'react'
import { Typography, Paper, Button } from '@material-ui/core';
import { makeStyles, } from '@material-ui/core/styles';
import axios from 'axios';
import Pdf from "react-to-pdf";
import itinerarios from '../../itinerario-data';

const Itinerariobasic = ({ idpaquete }) => {
  const ref = useRef();

  const [paque, setPaque] = useState(
    {
      data: [],
    });

  const [loading, setLoading] = useState(true);

  /* useEffect(() => {

    setPaque({
      data: itinerarios.find(itinerario => itinerario.idpaquete == idpaquete),
    });
  }, [idpaquete]);
 */
  const classes = useStyles();

  const getPaquetes = () => {
    setPaque({
      data: itinerarios.filter(itinerario => itinerario.idpaquete == idpaquete),
    });
    setLoading(
      !loading,
    );
  };

  if (!paque.data) {
    return null
  }

  return (
    <div className={classes.root}>
      <Paper >
        <div ref={ref}>
          {
            loading ? ("") : (<Typography>{paque.data && paque.data.title}</Typography>)
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
        <div>
          {
            loading && <div>
                        <Button variant="contained" color="primary" onClick={() => getPaquetes()}> Ver Itinerario</Button> 
                      </div>
          }
          {!loading && <div className={classes.root}>
                        <Pdf targetRef={ref} filename="ItinerarioJAO.pdf">
                          {({ toPdf }) => <Button variant="contained" color="primary" onClick={toPdf}>Imprimir</Button>}
                        </Pdf>
                      </div>
          }
        </div>
      </Paper>
    </div>
  )
}
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#FFF ',
    maxHeight: '100vh',
    display: "flex",
    direction: "row",
    justifyContent: "space-evenly",
    alignItems: "flex-start",
  },

}));

export default Itinerariobasic
