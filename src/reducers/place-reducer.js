const defaultPlaceState = [];

export default (state = defaultPlaceState, action) => {
    switch (action.type) {
        case 'ADD_PLACE':
            return [
                ...state,
                action.place
            ];
        case 'REMOVE_PLACE':
            return state.filter(({ id }) => id !== action.id );
        case 'COMPLETE_PLACE':
            return state.map((place) => {
                if (place.id === action.id) {
                    return {
                        ...place,
                        completed: true
                    };
                }  return place;
            });
        default:
            return state;
    }
};