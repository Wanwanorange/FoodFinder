import React, {Component} from 'react';
import {addPlace} from "../actions/place-actions";
import {connect} from 'react-redux';
import selectPlaces from '../selectors/place-selector';

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
            id: this.state.id,
            name: this.state.name,
            category: this.state.category,
            completed: this.state.completed
        });
        return '';
    };

    onSubmit = (e) => {
        e.preventDefault();
        const error = this.addPlaceIfNoErrors(this.state);

        this.setState({error});

        if (!error) {
            document.getElementsByName('name').value = '';
        }
    };

    onNameChange = (e) => {
        const name = e.target.value;
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
                    <input type="text" name="name" onChange={this.onNameChange}/>
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
        places: selectPlaces(state.places)
    };
};

const mapDispatchToProps = (dispatch) => ({
    addPlace: (place) => dispatch(addPlace(place))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddPlace);
