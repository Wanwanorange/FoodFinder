import React, {Component} from 'react';
import { addPlace } from "../actions/place-actions";
import { connect } from 'react-redux';
import selectPlaces from '../selectors/place-selector';

export class AddPlace extends Component {
    state = {
        error: undefined
    };

    checkForErrors = (input) => {
        const name = input.name.value;
        if (!name) {
            return 'Please enter place name';
        }
        else if (this.props.places.findIndex(place => place.id === name ) > -1) {
            return 'This place is already on your list';
        }
        const place = {
            id: name,
            name: name,
            category: input.category.value,
            completed: false
        };
        this.props.addPlace(place);
    }

    onInputChange = (e) => {
        e.preventDefault();
        const input = e.target.elements;
        const error = this.checkForErrors(input);

        this.setState({ error });


        if (!error) {
            e.target.elements.name.value = '';
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onInputChange}>
                    <input type="text" name="name"/>
                    <select name="category">
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
        places: selectPlaces(state.places)
    };
};

const mapDispatchToProps = (dispatch) => ({
    addPlace: (place) => dispatch(addPlace(place))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddPlace);
