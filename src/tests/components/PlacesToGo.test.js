import React from 'react';
import { shallow } from 'enzyme';
import PlacesToGo from '../../components/PlacesToGo';

test('should render Places To Go correctly', () => {
    const wrapper = shallow(<PlacesToGo/>);
    expect(wrapper).toMatchSnapshot();
});
