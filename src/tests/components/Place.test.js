import React from 'react';
import {shallow} from 'enzyme';
import Place from '../../components/Place';
import places from '../testData/places';

let wrapper, removePlace, completePlace;

beforeEach(() => {
    removePlace = jest.fn();
    completePlace = jest.fn();
    wrapper = shallow(<Place
        removePlace={removePlace}
        completePlace={completePlace}
        id={places[0].id}/>);
});

test('should render Place correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should remove place when prompted', () => {
    wrapper.find('.remove-button').simulate('click');
    expect(removePlace).toHaveBeenLastCalledWith({ id: '1234' });
});

test('should complete place when prompted', () => {
    wrapper.find('.complete-button').simulate('click');
    expect(completePlace).toHaveBeenCalledWith({ id: '1234' });
});
