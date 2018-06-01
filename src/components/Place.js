import React, {Component} from 'react';
import '../styles/Place.css';

class Place extends Component {

    render() {
        return (
            <div className="place">
                <li>
                    <p>{this.props.name}</p>
                    <p>{this.props.type}</p>
                </li>
                <button onClick={(e) => {this.props.removePlace(this.props.name)}}>X</button>
            </div>
        );
    }
}

export default Place;