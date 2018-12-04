const counter = (state, action) => {
    if ( state === undefined) {
        return { count: 0};
    }

    const count = state.count;

    switch (action.type) {
        case "INCREASE":
            return { count: count + 1 };
        case "DECREASE":
            return { count: count -1 };
        default:
            return state;
    }
}

export default counter;