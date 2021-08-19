export const type = 'empyBasket';

const empyBasket = (data) => ({
    type,
    payload: data,
});

export default empyBasket;