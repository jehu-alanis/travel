export const type = 'empyMessages';

const empyMessages = (data) => ({
    type,
    payload: data,
});

export default empyMessages;