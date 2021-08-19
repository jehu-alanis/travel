import { type as agregarPersonas } from '../actions/agregarPersonas';
import { type as empyPersonas } from '../actions/empyPersonas';
const defaultState = {
    personas: [],
}
    


function reducer(state = defaultState, { type, payload }) {
    switch (type) {
        case agregarPersonas: {
            if (!payload) {
                return null;
            }
            return{
                ...state,
                personas: state.personas.concat(payload)
               };
           
        }
        case empyPersonas: {
            if (!payload) {
                return null;
            }
            return{
                ...state,
                personas: []
               };
           
        }
        
        default:
            return state;
    }
}

export default reducer;