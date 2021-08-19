export const type = 'paymentMessage';

const paymentMessage = (data) => ({
    type,
    payload: data,
});

export default paymentMessage;