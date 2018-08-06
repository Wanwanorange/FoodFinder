import React from 'react';
import { shallow } from 'enzyme';
import { PlacesCompleted } from '../../components/PlacesCompleted';
import places from '../testData/places';

test('should render PlacesCompleted correctly', () => {
    const wrapper = shallow(<PlacesCompleted places={places}/>);
    expect(wrapper).toMatchSnapshot();
});