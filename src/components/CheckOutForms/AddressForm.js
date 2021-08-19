import {React} from 'react'
import { Typography, Grid, Button } from '@material-ui/core';
import {useForm,FormProvider} from 'react-hook-form';
import AddressInput from './AddressInput';
import { Link } from "react-router-dom";
import empyBasket from '../../redux/actions/empyBasket';
import empyFechas from '../../redux/actions/empyFechas';
import empyMessages from '../../redux/actions/empyMessages';
import empyPersonas from '../../redux/actions/empyPersonas';
import agregarPersonas from '../../redux/actions/agregarPersonas';
import { connect } from "react-redux";

const AddressForm = ({nextStep,agregarPersonas,empyFechas, empyMessages, empyPersonas,empyBasket}) => {
const methods = useForm();

const removeItem = () => {
    let date={};
    empyBasket(date)
    empyFechas(date)
    empyPersonas(date)
    empyMessages(date)                
 };

return (
        <div>
            <Typography component="h6" gutterBottom>
              Información del viajero
             </Typography>
             <FormProvider {...methods}>
             
             <form onSubmit={methods.handleSubmit(data => {
                 
                 agregarPersonas(data);
                
                nextStep();
             })}>
             
                 <Grid container spacing={3}>
                 <AddressInput required name="Nombre_del_Viajero" label="Nombre_del_Viajero"/>
                 <AddressInput required name="Apellidos_del_Viajero" label="Apellidos_del_Viajero"/>
                 <AddressInput required name="Correo" label="Correo"/>
                 
                 
                 </Grid>
                 <div style={{display: "flex",justifyContent: "space-between", marginTop:"1rem"}}>
                 <Button type="submit" variant="contained" color="primary">
                     Next
                 </Button>
                 <Button component={Link} to="/" onClick={removeItem}>
                     Cancelar 
                 </Button>
                 </div>
                 
             </form>
             </FormProvider>
             
        </div>
    )
}

const mapDispatchToProps =  ({
    agregarPersonas,
    empyBasket,
    empyFechas,
    empyMessages,
    empyPersonas
          
    });  

export default connect(null, mapDispatchToProps) (AddressForm)
