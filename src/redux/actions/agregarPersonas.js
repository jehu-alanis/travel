export const type = 'agregarPersonas';

const agregarPersonas = (data) => ({
    type,
    payload: data,
});

export default agregarPersonas;