import React, { Component } from 'react';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import { addPlace } from "../actions/place-actions";
import { connect } from 'react-redux';
import selectPlaces from '../selectors/place-selector';
import '../styles/AddPlace.css';

export class AddPlace extends Component {
    state = {
        id: '',
        name: '',
        category: 'bakery',
        completed: false,
        error: '',
        latitude: null,
        longitude: null
    };

    addPlaceIfNoErrors = (input) => {
        const name = input.name;
        if (!name) {
            return 'Please enter place name';
        }
        else if (this.props.places.findIndex(place => place.name === name) > -1) {
            return 'This place is already on your list';
        }

        geocodeByAddress(name)
            .then(res => getLatLng(res[0]))
            .then(({ lat, lng }) => {
                this.props.addPlace({
                    id: input.id,
                    name,
                    category: input.category,
                    completed: input.completed,
                    latitude: lat,
                    longitude: lng
                });
            })
            .catch(error => {
                console.log('error', error); // eslint-disable-line no-console
            });
        
        return '';
    };

    onSubmit = (e) => {
        e.preventDefault();
        document.getElementsByClassName('location-search-input').value = '';
        const error = this.addPlaceIfNoErrors(this.state);

        this.setState({ error });

        if (!error) {
            this.setState(() => ({
                name: ''
            }));
        }
    };

    onNameChange = (name) => {
        this.setState(() => ({ id: name, name }));
    };

    onCategoryChange = (e) => {
        const category = e.target.value;
        this.setState(() => ({ category }));
    };

    onCloseClick = (e) => {
        this.setState(() => ({
            latitude: null,
            longitude: null,
            name: '',
            error: ''
        }));
    };

    render() {
        return (
            <div>
                <form className="entryform" onSubmit={this.onSubmit} >
                    <PlacesAutocomplete
                        value={this.state.name}
                        onChange={this.onNameChange}>
                        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                            <div className="searchbar">
                                <div className="search-input">
                                    <input
                                        {...getInputProps({
                                            placeholder: 'Search Places ...',
                                            className: 'location-search-input',
                                        })}
                                    />
                                    {this.state.name.length > 0 && (
                                        <button
                                            className="Demo__clear-button"
                                            onClick={this.onCloseClick}
                                        >
                                            x
                                    </button>
                                    )}
                                </div>
                                {suggestions.length > 0 && (
                                    <div className="autocomplete-dropdown-container">
                                        {loading && <div>Loading...</div>}
                                        {suggestions.map(suggestion => {
                                            const className = suggestion.active
                                                ? 'suggestion-item--active'
                                                : 'suggestion-item';
                                            const style = suggestion.active
                                                ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                                                : { backgroundColor: '#ffffff', cursor: 'pointer' };
                                            return (
                                                <div
                                                    {...getSuggestionItemProps(suggestion, {
                                                        className,
                                                        style,
                                                    })}
                                                >
                                                    <span>{suggestion.description}</span>
                                                </div>
                                            );
                                        })}
                                    </div>
                                )}
                            </div>
                        )}
                    </PlacesAutocomplete>

                    <select className="spacing" name="category"
                        onChange={this.onCategoryChange}>
                        <option value="bakery">Bakery</option>
                        <option value="cafe">Cafe</option>
                        <option value="meal delivery">Meal Delivery</option>
                        <option value="meal takeaway">Meal Takeaway</option>
                        <option value="restaurant">Restaurant</option>
                    </select>
                    <button className="spacing add-place">Add Place</button>
                </form>

                {this.state.error && <p className="error">{this.state.error}</p>}
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        places: selectPlaces(state.places, false)
    };
};

const mapDispatchToProps = (dispatch) => ({
    addPlace: (place) => dispatch(addPlace(place))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddPlace);
