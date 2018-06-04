const defaultPlaceState = [];

export default (state = defaultPlaceState, action) => {
    switch (action.type) {
        case 'ADD_PLACE':
            return [
                ...state,
                action.place
            ];
        case 'REMOVE_PLACE':
            return state.filter(({ id }) => id != action.id );
        default:
            return state;
    }
};