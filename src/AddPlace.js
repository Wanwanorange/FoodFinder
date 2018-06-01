import React, {Component} from 'react';

export default class AddPlace extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: undefined
        };
    }



    onInputChange = (e) => {
        e.preventDefault();
        const input = e.target.elements;
        const error = this.props.checkForErrors(input.name.value);

        this.setState(() => ({ error }));

        if (!error) {
            this.props.handleAddPlace(input.name.value, input.type.value);
            e.target.elements.name.value = '';
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onInputChange}>
                    <input type="text" name="name"/>
                    <select name="type">
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


