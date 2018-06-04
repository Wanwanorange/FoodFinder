import React from 'react';
import '../styles/PlacesToGo.css';
import AddPlace from './AddPlace';
import PlacesList from './PlacesList';

const PlacesToGo = () => (
    <div className="PlacesToGo">
        <AddPlace/>
        <PlacesList/>
    </div>
);


export default PlacesToGo;
