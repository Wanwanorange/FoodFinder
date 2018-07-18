import React, {Component} from 'react';
import Place from "./Place";
import { removePlace } from "../actions/place-actions";
import selectPlaces from '../selectors/place-selector';

import { connect } from 'react-redux';

export const PlacesCompleted = (props) => (
    <div>
        {props.places.map((place) =>
            <Place {...place}
                removePlace={props.removePlace}/>)}
    </div>
);

const mapStateToProps = (state) => {
    return {
        places: selectPlaces(state.places, true)
    };
};

const mapDispatchToProps = (dispatch) => ({
    removePlace: (data) => dispatch(removePlace(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(PlacesCompleted);