const commentReducer = (state = {}, action) => {

    const newState = { ...state };
    switch (action.type) {
        case 'REGISTER_USER_TRIGGER':
            return { ...newState, loading: true, isFetched: false }

        case 'REGISTER_USER_RESPONSE':
            return { ...newState, loading: false, isFetched: true, response: action.json, action: action.type }

        default:
            return newState
    }
};

export default commentReducer;