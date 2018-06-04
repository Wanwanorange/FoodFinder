import placeReducer from '../../reducers/place-reducer';
import places from '../testData/places';

test('should set default state', () => {
    const state = placeReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

test('should add a place', () => {
    const place = {
        id: '09385',
        name: 'Miralio',
        category: 'restaurant',
        completed: false
    };

    const action = {
        type: 'ADD_PLACE',
        place
    };

    const state = placeReducer(places, action);
    expect(state).toEqual([...places, place]);
})

test('should remove place with id', () => {
    const action = {
        type: 'REMOVE_PLACE',
        id: '1234'
    };

    const state = placeReducer(places, action);
    expect(state).toEqual([places[1]]);
});