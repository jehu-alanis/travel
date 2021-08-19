import { useState,React }from 'react';
import Review from './Review';
import LockIcon from '@material-ui/icons/Lock';
import { Divider, Typography, Button, CircularProgress, } from '@material-ui/core';
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import {loadStripe } from "@stripe/stripe-js";
import accounting from "accounting";
import axios from "axios";
import { connect } from "react-redux";
import paymentMessage from '../../redux/actions/paymentMessage';

const stripePromise = loadStripe("pk_test_51IvatVHhSm5BF1EZbMl0AwHp4O4JPvOZpxRoqb2YIKGCF1l95BUn0Vl3Im2zi5QKjKFzy3amIiKaieEhr2iM4DvL00yMN8L6fj");

const CARD_ELEMENT_OPTIONS = {
    iconStyle: "solid",
    hidePostalCode: true,
    style: {
        base: {
            iconColor: "rgb(240, 57, 122)",
            color: "#333",
            fontSize: "18px",
            "::placeholder": {
                color: "#ccc",
            },
        },
        invalid: {
            color: "#e5424d",
            ":focus": {
                color: "#303238"
            },
        },
    },
};


const CheckoutForm = ({ nextStep, backStep ,paymentMessage,basket,fechas,personas}) => {
    const [loading, setLoading] = useState(false);
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (e) =>{
        e.preventDefault();
     const {error, paymentMethod}  = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)
        })
        setLoading(true);
         if(!error){
            const {id}= paymentMethod;
             try{
                
                const {data} = await axios.post("http://localhost:4000/checkout",{
                       id,
                       amount: basket.basket[0].precio * 100,
                    });    
                    
                    paymentMessage(data.message)
                    elements.getElement(CardElement).clear();
                    nextStep();

                 }catch(error){
                  nextStep();
                }
                setLoading(false);
            }

            var fechaE = fechas.fechas[0];
            var fechaS = fechas.fechas[1];
            const fecha_año = fechaE.getFullYear();
            const fecha_mes= fechaE.getMonth()+ 1;
            const fecha_dia = fechaE.getDate();
            const fecha_año1 = fechaS.getFullYear();
            const fecha_mes1= fechaS.getMonth()+ 1;
            const fecha_dia1 = fechaS.getDate();
           const hotel = basket.basket[0].hotel;
            const fecha_entrada=`${fecha_año}-${fecha_mes}-${fecha_dia}`;
            const fecha_salida=`${fecha_año1}-${fecha_mes1}-${fecha_dia1}`;
             axios.post("http://localhost:4000/calendario",{
                fecha_entrada,
                hotel,
                fecha_salida
            });
             
        ////insert
        const name = personas.personas[0].Nombre_del_Viajero;
        const apellido = personas.personas[0].Apellidos_del_Viajero;
        const correo = personas.personas[0].Correo;
        const importe = basket.basket[0].precio;
        const paquete = basket.basket[0].titulo;
        const nombre=`${name} ${apellido}`;
         axios.post("http://localhost:4000/venta",{
        paquete,
        fecha_entrada,
        fecha_salida,
        nombre,
        correo,       
        importe
            });
           
        };

    if (!basket) {
        return null;
    }

    return (
        <form onSubmit={handleSubmit}>
            <CardElement options={CARD_ELEMENT_OPTIONS} />
            <div style={{ display: "flex",justifyContent: "space-between", marginTop:"1rem"}}>
            <Button variant="outlined" onClick={backStep}>Atrás</Button>
            <Button  disabled={false} type="submit"  variant="contained" color="primary" >
             {
                  loading ? (<CircularProgress/>) : (`Paga ${accounting.formatMoney(parseInt(basket.basket[0].precio))} MXN`)
                  
                  }
            </Button>
            </div>
            <div style={{ display: "flex", justifyContent:"center" ,marginTop:"1rem"}}>
             <LockIcon fontSize='small' color="primary"></LockIcon> 
             <Typography variant="caption" gutterBottom >
             La información de tu tarjeta esta encryptada.
            </Typography> 
            </div>
        </form>
    )
}

const PaymentForm = ({ nextStep, backStep,paymentMessage,basket ,fechas,personas}) => {
  
    return (
        <div>
            <Review />
            <Divider />
            <Typography variant="h6" gutterBottom style={{ margin: "20px 0" }}>
                Payment method
            </Typography>
            <Elements stripe={stripePromise}>
                <CheckoutForm backStep={backStep} nextStep={nextStep} 
                paymentMessage={paymentMessage}
                basket={basket} 
                fechas={fechas}
                personas={personas}/>
            </Elements>
        </div>
    )
}

const mapStateToProps = state => ({
    basket: state.basket,
    fechas: state.fechas,
    personas: state.personas,
   
  })
 // 
const mapDispatchToProps =  ({
    paymentMessage
          
    });  

export default connect(mapStateToProps, mapDispatchToProps) (PaymentForm);