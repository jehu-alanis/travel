import {React,useState,useRef} from 'react'
import { Typography, Divider, Button, IconButton,  } from '@material-ui/core';
import PrintIcon from '@material-ui/icons/Print';
import { Alert, AlertTitle } from '@material-ui/lab';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import FacebookIcon from '@material-ui/icons/Facebook';
import QRCode from "react-qr-code";
import { connect } from "react-redux";
import empyBasket from '../../redux/actions/empyBasket';
import empyFechas from '../../redux/actions/empyFechas';
import empyMessages from '../../redux/actions/empyMessages';
import empyPersonas from '../../redux/actions/empyPersonas';
import { makeStyles } from '@material-ui/core/styles';
import { Link as Router } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import Pdf from "react-to-pdf";

function getLabelByStatus(message) {
  return mapLabels[message] || <Alert severity="error">
      <AlertTitle>UPPS!</AlertTitle>
      Hubo un problema con el pago, no te preocupes no se hizo cargo alguno. 
      Trata de intentarlo de nuevo o comunicate con tu banco.
  </Alert>
  }

const mapLabels = {
  succesful: <Alert severity="success">
      <AlertTitle>Listo</AlertTitle>
      <strong>Gracias por tu compra!</strong> —
      Presenta este Código QR en el lugar acordado. En un momentos nos comunicaremos contigo 
      "Preciona el Botón de INICIO para continuar".
</Alert>

};

function getLabelByStatus2(message) {
  return mapLabels2[message] || <Alert severity="error">

      <strong>Disculpa! :(</strong>
  </Alert>;
}


const mapLabels2 = {
  succesful: <Alert severity="success">
      <div style={{
          display: "flex",
          justifyContent: "flex-end",
      }}>
          <WhatsAppIcon fontSize='large' ></WhatsAppIcon> &nbsp;
           <Typography variant="h5" gutterBottom >
            2283242637
           </Typography>

          <FacebookIcon fontSize='large' color="primary"></FacebookIcon> &nbsp;
           <Link color="inherit" href="https://www.facebook.com/jehualanis">
              <Typography variant="h5" gutterBottom > Jehu Alanis </Typography>
          </Link>

      </div>


  </Alert>

};






const Confirmacion = ( { message,empyBasket,basket,fechas,personas,empyFechas, empyMessages, empyPersonas }) => {
  
  
  const Data = () =>{
    const name = personas.personas[0].Nombre_del_Viajero;
    const apellido = personas.personas[0].Apellidos_del_Viajero;
    const nombre=`${name} ${apellido}`;
    
    const precio = basket.basket.map(x => x.precio);
    const titulo = basket.basket.map(x => x.titulo); 
     var fechaE = fechas.fechas[0];
     var fechaS = fechas.fechas[1];
     const fecha_año = fechaE.getFullYear();
     const fecha_mes= fechaE.getMonth()+ 1;
     const fecha_dia = fechaE.getDate();
     const fecha_año1 = fechaS.getFullYear();
     const fecha_mes1= fechaS.getMonth()+ 1;
     const fecha_dia1 = fechaS.getDate();
     const fecha_entrada=`${fecha_año}-${fecha_mes}-${fecha_dia}`;
     const fecha_salida=`${fecha_año1}-${fecha_mes1}-${fecha_dia1}`;
     var hoy = new Date();  
     let date = hoy.getDate();
     let month = hoy.getMonth() + 1;
     let year = hoy.getFullYear();
     var fechaYHora = `Se pago el dia ${date<10?`0${date}`:`${date}`} / ${month<10?`0${month}`:`${month}`} / ${year} 
     Desgloce de compra 
     ${titulo} 
      Total: $${precio} Pesos
      Dia de Entrada ${fecha_entrada} 
      Dia de Salida ${fecha_salida} 
      Datos del Viajero ${nombre} 
     ¡Gracias por confiar en JAOS Viajes! `;
     
     return fechaYHora ;
     
  
    };
 const classes = useStyles();

    const removeItem = () => {
        let date={};
        empyBasket(date)
        empyFechas(date)
        empyPersonas(date)
        empyMessages(date)
        setText();                
     };
     const [text, setText] = useState(Data());
     const ref = useRef();
    return (
        <div className={classes.root} ref={ref}>

            <Typography variant="h6"> {getLabelByStatus(message.message)}</Typography>
            { message.message === "succesful" 
            ?  <div>
            <QRCode value={text}  size={256}  level="H" />
              
              <Pdf targetRef={ref} filename="CodigoQRJAO.pdf">
                  {({ toPdf}) => <IconButton size="small" onClick={toPdf}><PrintIcon >Imprimir</PrintIcon></IconButton> }
                </Pdf> 
           </div>
              : ""
             }
            
            <Divider />
            <Typography variant="h6"> {getLabelByStatus2(message.message)}</Typography>
            
            <Divider />
         
            <Divider />
            <Button component={Router} 
            to='/' 
            variant="contained" 
            color="primary" 
            type='button' 
            onClick={removeItem}>
                Inicio
            </Button>
        </div>
    )
}
const useStyles = makeStyles((theme) =>({
   
   root: {
    width: '100%',
    minHeight: '100vh',
    '& > * + *': {
        marginTop: theme.spacing(2),
      },
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    },
    qr:{
       display: 'flex',
       flexDirection: 'column',
      },
     }));
  const mapStateToProps = state => ({
    basket: state.basket,
    message: state.message,
    fechas: state.fechas,
    personas: state.personas
  })
 // 
   const mapDispatchToProps =  ({
    empyBasket,
    empyFechas,
    empyMessages,
    empyPersonas
          
    });

export default connect(mapStateToProps, mapDispatchToProps)(Confirmacion)
