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
                <div className="place-check">
                    <p className="place-details">{this.props.name}</p>
                    <p className="place-details">{this.props.category}</p>
                    {!this.props.completed &&
                        <button className="complete-button"
                            onClick={this.completePlace}>Been there!</button>}
                </div>
                <button className="remove-button"
                    onClick={this.removePlace} id={this.props.id}>X</button>
            </div>
        );
    }
}

export default Place