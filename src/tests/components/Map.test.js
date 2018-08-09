import React from 'react';
import { shallow } from 'enzyme';
import { SimpleMap } from '../../components/Map';
import places from '../testData/places';

test('should render Map correctly', () => {
    const wrapper = shallow(<SimpleMap places={places} />);
    expect(wrapper).toMatchSnapshot();
});