export const type = 'agregarFechas';

const agregarFechas = (dates) => ({
    type,
    payload: dates

});

export default agregarFechas;