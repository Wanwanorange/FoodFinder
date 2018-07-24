import React from 'react';
import { shallow } from 'enzyme';
import PlacesCompleted from '../../components/PlacesCompleted';

test('should render PlacesCompleted correctly', () => {
    const wrapper = shallow(<PlacesCompleted/>);
    expect(wrapper).toMatchSnapshot();
});