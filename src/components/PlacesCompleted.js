import React, {Component} from 'react';
import Place from "./Place";

class PlacesCompleted extends Component {
    constructor(props) {
        super(props);
        this.state = {
            completedPlaces: [<Place name="Jenis Ice Cream" category="cafe"/>]
        };
    }

    render() {
        return (
            <div>
                <ul>
                    {this.state.completedPlaces}
                </ul>
            </div>
        );
    }
}

export default PlacesCompleted;