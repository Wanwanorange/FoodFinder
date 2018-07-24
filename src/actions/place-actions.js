
export const addPlace = (place) => ({
    type: 'ADD_PLACE',
    place
});

export const removePlace = ({ id } = {}) => ({
    type: 'REMOVE_PLACE',
    id
});