
export default (places, completed) => {
    return places.filter((place) =>  place.completed === completed);
};