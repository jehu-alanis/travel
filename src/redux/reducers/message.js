import { type as paymentMessage } from '../actions/paymentMessage';
import { type as empyMessages } from '../actions/empyMessages';

const defaultState = {
    message: "",
}
    


function reducer(state = defaultState, { type, payload }) {
    switch (type) {
        case paymentMessage: {
            if (!payload) {
                return null;
            }
            return{
                ...state,
                message: state.message.concat(payload)
               };
           
        }
        case empyMessages: {
            if (!payload) {
                return null;
            }
            return{
                ...state,
                message: ""
               };
           
        }
        
        default:
            return state;
    }
}

export default reducer;