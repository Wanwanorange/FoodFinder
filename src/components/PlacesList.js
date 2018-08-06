import React from 'react';
import Place from './Place';
import { removePlace, completePlace } from "../actions/place-actions";
import selectPlaces from '../selectors/place-selector';

import { connect } from 'react-redux';

export const PlacesList = (props) => (
    <div>
        {props.places.map((place) =>
            <Place {...place}
                removePlace={props.removePlace}
                completePlace={props.completePlace} />)}
    </div>
);

const mapStateToProps = (state) => {
    return {
        places: selectPlaces(state.places, false)
    };
};

const mapDispatchToProps = (dispatch) => ({
    removePlace: (data) => dispatch(removePlace(data)),
    completePlace: (data) => dispatch(completePlace(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(PlacesList);