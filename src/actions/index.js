export const incNumber = (index) => {
    return {
        type: 'INCREMENT',
        counter: { index }
    }
};

export const decNumber = (index) => {
    return {
        type: 'DECREMENT',
        counter: { index }
    }
};