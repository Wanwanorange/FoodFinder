import React, {Component} from 'react';
import '../styles/PlacesToGo.css';
import AddPlace from './AddPlace';
import Place from './Place';

class PlacesToGo extends Component {
    state = {
        places: []
    };

    handleAddPlace = (name, type = 'fast food') => {
        const newPlace = <Place name={name} type={type} key={name}/>;
        this.setState({places: [...this.state.places, newPlace]}, (() => {}));
    }

    checkForErrors = (input) => {
        const name = input.name.value;
        if (!name) {
            return 'Please enter place name';
        } else if (this.state.places.findIndex(place => place.key === name ) > -1) {
            return 'This place is already on your list';
        }
        this.handleAddPlace(name, input.type.value);
    }

    render() {
        return (
            <div className="PlacesToGo">
                <AddPlace
                    checkForErrors={this.checkForErrors}/>
                <ul>
                    {this.state.places}
                </ul>

            </div>
        );
    }
}

export default PlacesToGo;
