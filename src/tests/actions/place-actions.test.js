import { addPlace, removePlace } from '../../actions/place-actions';
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