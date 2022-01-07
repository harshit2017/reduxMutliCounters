
const counterReducer = (state = [0, 0], action) => {
    switch (action.type) {
        case 'INCREMENT': return state.map((value, i) => {
            if (action.counter.index !== i) return value += 1;
            return value;
        });
        case 'DECREMENT': return state.map((value, i) => {
            if (action.counter.index !== i) return value -= 1;
            return value;
        });

        default: return state;
    }

}


export default counterReducer;