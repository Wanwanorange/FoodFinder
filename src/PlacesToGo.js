import React, {Component} from 'react';
import './PlacesToGo.css';
import AddPlace from './AddPlace';
import Place from './Place';

class PlacesToGo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            places: []
        };

        this.handleAddPlace = this.handleAddPlace.bind(this);
        this.checkForErrors = this.checkForErrors.bind(this);
    }

    handleAddPlace(name, type = 'fast food') {
        const newPlace = <Place name={name} type={type} key={name}/>;
        this.setState((prevState) => ({ places: [...prevState.places, newPlace] }));
        console.log(this.state);
    }

    checkForErrors(input) {
        if (!input) {
            return 'Please enter place name';
        } else if (this.state.places.indexOf(input) > -1) {
            return 'This place is already on your list';
        }
    }

    render() {
        return (
            <div className="PlacesToGo">
                <AddPlace
                    handleAddPlace={this.handleAddPlace}
                    checkForErrors={this.checkForErrors}/>
                <ul>
                    {this.state.places}
                </ul>

            </div>
        );
    }
}

export default PlacesToGo;
