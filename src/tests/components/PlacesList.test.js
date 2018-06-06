import React from 'react';
import { shallow } from 'enzyme';
import { PlacesList } from '../../components/PlacesList';
import places from '../testData/places';

test('should render PlacesList with list of places', () => {
    const wrapper = shallow(<PlacesList places={places}/>);
    expect(wrapper).toMatchSnapshot();
});