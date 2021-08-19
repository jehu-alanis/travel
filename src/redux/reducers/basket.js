import { type as agregarBasket } from '../actions/agregarBasket';
import { type as empyBasket } from '../actions/empyBasket';

const defaultState = {
    basket: [],
}
    
export const getBasketTotal = (basket) => {
   
    if (!basket) {
        return null;
    }
    const precio = basket.map(x => x.precio);
    const getBasketTotal = precio.reduce((acc,amount)=> acc + amount ,0);
 
return getBasketTotal;
}

function reducer(state = defaultState, { type, payload }) {
    switch (type) {
        case agregarBasket: {
            if (!payload) {
                return null;
            }
            return{
                ...state,
                basket: state.basket.concat(payload)
               };
           
        }
        
        case empyBasket: {
            if (!payload) {
                return null;
            }
            return{
                ...state,
                basket: []
               };
           
        }
        default:
            return state;
    }
}

export default reducer;