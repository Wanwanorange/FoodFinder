import React from 'react';
import { shallow } from 'enzyme';
import { AddPlace } from "../../components/AddPlace";
import places from '../testData/places';

let addPlace, wrapper, onSubmitSpy;

beforeEach(() => {
    addPlace = jest.fn();
    onSubmitSpy = jest.fn();
    wrapper = shallow(<AddPlace addPlace={addPlace}/>);
});

test('should render AddPlace correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should successfully add place with proper values', () => {
    const place = {
        id: '456',
        name: 'Sloppy Poppy',
        category: 'cafe',
        completed: false
    };
    wrapper.setState(place);
    wrapper.setProps({ places });
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    });

    expect(wrapper.state('error')).toBe('');
    expect(addPlace).toHaveBeenLastCalledWith({
        id: '456',
        name: 'Sloppy Poppy',
        category: 'cafe',
        completed: false
    });
});

test('should display error if no name entry', () => {
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    });
    expect(wrapper.state('error')).toBe('Please enter place name');
});

test('should display error if entry already exists', () => {
    const place = {
        id: '6677',
        name: 'Big Mamas',
        category: 'cafe',
        completed: false
    };
    wrapper.setState(place);
    wrapper.setProps({ places });
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    });
    expect(wrapper.state('error')).toBe('This place is already on your list');
});

test('should update name on input change', () => {
    const value = 'Sloppy Poppy';
    wrapper.find('input').simulate('change', {
        target: { value }
    });
    expect(wrapper.state('name')).toBe(value);
    expect(wrapper.state('id')).toBe(value);
});

test('should update category on input change', () => {
    const value = 'cafe';
    wrapper.find('select').simulate('change', {
        target: { value }
    });
    expect(wrapper.state('category')).toBe(value);
});