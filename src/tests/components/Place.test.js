import React from 'react';
import {shallow} from 'enzyme';
import Place from '../../components/Place';
import places from '../testData/places';

let wrapper, removePlace;

beforeEach(() => {
    removePlace = jest.fn();
    wrapper = shallow(<Place
        removePlace={removePlace}
        id={places[0].id}/>);
});

test('should render Place correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should remove place when prompted', () => {
    wrapper.find('button').simulate('click');
    expect(removePlace).toHaveBeenLastCalledWith({ id: '1234' });
});

