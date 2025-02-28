const initialState = {
    value: 0,
};

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { ...state, value: state.value + 1 };
        case 'DECREMENT':
            return { ...state, value: Math.max(state.value - 1, 0) };
        case 'INCREMENT10':
            return { ...state, value: state.value + 10 };
        case 'DECREMENT10':
            return {
                ...state,
                value: state.value >= 10 ? state.value - 10 : 0,
            };
        case 'RESET':
            return { ...state, value: 0 };
        default:
            return state;
    }
};

export default counterReducer;
