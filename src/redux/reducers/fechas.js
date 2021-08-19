import { type as agregarFechas } from '../actions/agregarFechas';
import { type as empyFechas } from '../actions/empyFechas';
const defaultState = {
    fechas: [],
}
    


function reducer(state = defaultState, { type, payload }) {
    switch (type) {
        case agregarFechas: {
            if (!payload) {
                return null;
            }
            return{
                ...state,
                fechas: state.fechas.concat(payload)
               };
           
               
        }
        case empyFechas: {
            if (!payload) {
                return null;
            }
            return{
                ...state,
                fechas: []
               };
           
        }
        default:
            return state;
    }
}

export default reducer;