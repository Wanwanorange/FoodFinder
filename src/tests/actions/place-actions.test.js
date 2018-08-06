import { addPlace, removePlace, completePlace } from '../../actions/place-actions';
import places from '../testData/places';

test('should setup add place with provided values', () => {
    const action = addPlace(places[0]);
    expect(action).toEqual({
        type: 'ADD_PLACE',
        place: places[0]
    });
});

test('should setup remove place', () => {
    const action = removePlace({ id: 'jo765' });
    expect(action).toEqual({
        type: 'REMOVE_PLACE',
        id: 'jo765'
    });
});

test('should setup complete place', () => {
    const action = completePlace({ id: '98dje' });
    expect(action).toEqual({
        type: 'COMPLETE_PLACE',
        id: '98dje'
    });
});