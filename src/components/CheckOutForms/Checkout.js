import {React, useState} from "react";
import useStyles from "./styles";
import { Paper, Typography, Stepper, StepLabel,Step, } from "@material-ui/core";
import AddressForm from "./AddressForm";
import PaymentForm from "./PaymentForm";
import Confirmacion from "./Confirmacion";
import { connect } from "react-redux";
import Header from "./Header";
const Checkout = ({paymentMessage}) => {
    const classes = useStyles();
    const [activeStep, setActivestep ] =  useState(0);
const steps= ["Personaliza tu viaje","Payment details"];
const nextStep = () => setActivestep((prevActivestep) => prevActivestep + 1);
const backStep = () => setActivestep((prevActivestep) => prevActivestep - 1);
const Form = () => activeStep === 0 ? <AddressForm nextStep = {nextStep} /> : <PaymentForm backStep = {backStep} nextStep = {nextStep} />

    return (
            <div className={classes.layout}>
            <Header/>        
            <Paper className={classes.paper}>
             <Typography component="h1" variant="h4" align='center' className={classes.title}>
              Carrito de viajes
             </Typography>
            
            <Stepper activeStep={activeStep} className={classes.stepper}>
            {
                steps.map(step=>(
                    <Step key={step}>
                      <StepLabel>{step}</StepLabel>
                    </Step>
                ))
            }

            </Stepper>
            {
             activeStep === steps.length ? (<Confirmacion paymentMessage={paymentMessage}/>) : (<Form/>)  
            }
           
            </Paper>
            
            </div>
        
    )

}


const mapStateToProps = state => ({
    paymentMessage: state.paymentMessage,
    
    
  })
 // 
 


export default connect(mapStateToProps, null) (Checkout);