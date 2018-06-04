import React, {Component} from 'react';
import '../styles/Place.css';

class Place extends Component {
    removePlace = () => {
        this.props.removePlace({ id: this.props.id });
    }

    render() {
        return (
            <div className="place">
                <p>{this.props.name}, {this.props.category}</p>
                <button
                    onClick={this.removePlace} id={this.props.id}>X</button>
            </div>
        );
    }
}

export default Place;