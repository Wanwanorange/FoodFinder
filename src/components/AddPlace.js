import React, { Component } from 'react';
import PlacesAutocomplete from 'react-places-autocomplete';
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
        error: ''
    };

    addPlaceIfNoErrors = (input) => {
        const name = input.name;
        if (!name) {
            return 'Please enter place name';
        }
        else if (this.props.places.findIndex(place => place.name === name) > -1) {
            return 'This place is already on your list';
        }
        this.props.addPlace({
            id: input.id,
            name,
            category: input.category,
            completed: input.completed
        });
        return '';
    };

    onSubmit = (e) => {
        e.preventDefault();
        const error = this.addPlaceIfNoErrors(this.state);

        this.setState({ error });

        if (!error) {
            document.getElementsByName('name').value = '';
        }
    };

    onNameChange = (e) => {
        const name = e;
        this.setState(() => ({ id: name, name }));
    };

    onCategoryChange = (e) => {
        const category = e.target.value;
        this.setState(() => ({ category }));
    };

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit} >
                    <PlacesAutocomplete
                        value={this.state.name}
                        onChange={this.onNameChange}>
                        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                            <div>
                                <input
                                    {...getInputProps({
                                        placeholder: 'Search Places ...',
                                        className: 'location-search-input',
                                    })}
                                />
                                {suggestions.length > 0 && (
                                    <div className="autocomplete-dropdown-container">
                                        {loading && <div>Loading...</div>}
                                        {suggestions.map(suggestion => {
                                            const className = suggestion.active
                                                ? 'suggestion-item--active'
                                                : 'suggestion-item';
                                            // inline style for demonstration purpose
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

                    <select name="category"
                        onChange={this.onCategoryChange}>
                        <option value="bakery">Bakery</option>
                        <option value="cafe">Cafe</option>
                        <option value="meal delivery">Meal delivery</option>
                        <option value="meal takeaway">Meal Takeaway</option>
                        <option value="restaurant">Restaurant</option>
                    </select>
                    <button>Add Place</button>
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
