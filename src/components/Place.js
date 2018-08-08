import React, { Component } from 'react';
import '../styles/Place.css';

class Place extends Component {

    removePlace = () => {
        this.props.removePlace({ id: this.props.id });
    }

    completePlace = () => {
        this.props.completePlace({ id: this.props.id });
    }

    render() {
        return (
            <div className="place">
                <div className="placeCheck">
                    <p className="placeDetails">{this.props.name}</p>
                    <p className="placeDetails">{this.props.category}</p>
                    {!this.props.completed &&
                        <button className="completeButton"
                            onClick={this.completePlace}>Been there!</button>}
                </div>
                <button className="removeButton"
                    onClick={this.removePlace} id={this.props.id}>X</button>
            </div>
        );
    }
}

export default Place