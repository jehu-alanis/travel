import React from 'react'
import { Typography, List, ListItem,ListItemText, } from '@material-ui/core';
//import {useStateValue} from "../../StateProvider";

import accounting from "accounting";
import { connect } from "react-redux";

const Review = ({basket, }) => {

    if (!basket) {
        return null;
    }

    return (
        <div>
            <Typography variant='h6' gutterBottom>
            Resumen del pedido
            </Typography>
            <List disablePadding>
            {
                     basket.basket.map(product=>(
                        <ListItem key={product.titulo}>
                         <ListItemText primary={product.titulo} secondary={`Cantidad : ${1} `}></ListItemText>
                         <Typography variant="body2">
                         {accounting.formatMoney(product.precio)}
                         </Typography>
                        </ListItem>
                     ))
                }

                     
                <ListItem>
                    <ListItemText primary="Total"></ListItemText>
                     <Typography variant="subtitle1">
                      {accounting.formatMoney(parseInt(basket.basket[0].precio))} 
                     </Typography>
                    
                </ListItem>
              
            
            </List>
        </div>
    )
}

const mapStateToProps = state => ({
    basket: state.basket,
     
  })
 // 


export default connect(mapStateToProps, null) (Review);